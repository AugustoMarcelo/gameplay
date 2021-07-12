import React, { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ListSeparator } from "../../components/ListSeparator";
import { ButtonIcon } from "../../components/ButtonIcon";

import BannerImg from '../../assets/banner.png';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Member } from "../../components/Member";

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Marcelo',
      avatar_url: 'https://github.com/augustomarcelo.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Marcelo',
      avatar_url: 'https://github.com/augustomarcelo.png',
      status: 'offline'
    },
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => 
          <ListSeparator
            style={styles.customListSeparator}
          />
        }
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  )
}