import React, { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { APPOINTMENTS_COLLECTION } from "../../config/storage";
import { Appointment, AppointmentEntity } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListSeparator } from "../../components/ListSeparator";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { Loading } from "../../components/Loading";
import { ModalView } from "../../components/ModalView";
import { SignOut } from "../../components/SignOut";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const navigation = useNavigation();
  const { isOpenModalToSignOut, toggleOpenModalToSignOut, signOut } = useAuth();
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleGoToAppointmentDetails(selectedGuild: AppointmentEntity) {
    navigation.navigate('AppointmentDetails', { selectedGuild });
  }

  function handleGoToAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const data = await AsyncStorage.getItem(APPOINTMENTS_COLLECTION);
    const parsedAppointments: AppointmentEntity[] = data ? JSON.parse(data) : [];

    if (category) {
      setAppointments(parsedAppointments.filter(item => item.category === category));
    } else {
      setAppointments(parsedAppointments);
    }

    setIsLoading(false);
  }

  function handleSignOut() {
    toggleOpenModalToSignOut();
    signOut();
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <>
      <Background>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleGoToAppointmentCreate} />
        </View>
        <CategorySelect
          selectedCategory={category}
          setSelectedCategory={handleSelectCategory}
        />

        { isLoading
          ? <Loading />
          : <>
              <ListHeader
                title="Partidas agendadas"
                subtitle={`Total ${appointments.length}`}
              />
          
              <FlatList
                style={styles.matchesList}
                data={appointments}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListSeparator />}
                contentContainerStyle={{ paddingBottom: 69 }}
                renderItem={({ item }) => (
                  <Appointment
                    data={item}
                    onPress={() => handleGoToAppointmentDetails(item)}
                  />
                )}
              />
            </>
        }
      </Background>
      <ModalView
        visible={isOpenModalToSignOut}
        closeModal={() => {}}
        showBar={false}
        containerStyle={styles.customModalView}
      >
        <SignOut
          handleNegativeButtonClick={toggleOpenModalToSignOut}
          handlePositiveButtonClick={handleSignOut}
        />
      </ModalView>
    </>
  )
}