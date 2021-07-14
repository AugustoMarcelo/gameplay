import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextAreaInput } from "../../components/TextAreaInput";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Guilds } from "../Guilds";
import { GuildEntity } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [selectedGuild, setSelectedGuild] = useState<GuildEntity>({} as GuildEntity);
  const [isOpenGuildsModal, setIsOpenGuildsModal] = useState(false);

  function handleToggleModalGuilds() {
    setIsOpenGuildsModal(!isOpenGuildsModal);
  }

  function handleSelectGuild(guildSelect: GuildEntity) {
    setSelectedGuild(guildSelect);
    setIsOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
          ]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheck
            setSelectedCategory={setCategory}
            selectedCategory={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleToggleModalGuilds}>
              <View style={styles.selectServerContainer}>
                { selectedGuild.icon
                  ? <GuildIcon />
                  : <View style={styles.image} />
                }
                <View style={styles.selectServerContent}>
                  <Text style={styles.label}>
                    {selectedGuild.name
                      ? selectedGuild.name
                      : 'Selecione um servidor'
                    }
                  </Text>  
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                <View style={styles.row}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Horário</Text>
                <View style={styles.row}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.charactersCount}>Max 100 caracteres</Text>
            </View>
            <TextAreaInput
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView
        visible={isOpenGuildsModal}
        closeModal={handleToggleModalGuilds}
      >
        <Guilds handleSelectGuild={handleSelectGuild} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}