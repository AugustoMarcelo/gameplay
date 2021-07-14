import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListSeparator } from "../../components/ListSeparator";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');
  
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '09/06 às 20:40h',
      description: 'É home que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '09/06 às 20:40h',
      description: 'É home que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ]

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleGoToAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleGoToAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleGoToAppointmentCreate} />
      </View>
      <CategorySelect
        selectedCategory={category}
        setSelectedCategory={handleSelectCategory}
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 6" />
      
      <FlatList
        style={styles.matchesList}
        data={appointments}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListSeparator />}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={handleGoToAppointmentDetails} />
        )}
      />
    </Background>
  )
}