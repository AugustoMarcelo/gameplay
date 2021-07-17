import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground, Text, View, Alert, Share, Platform } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Linking from 'expo-linking';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ListSeparator } from "../../components/ListSeparator";
import { ButtonIcon } from "../../components/ButtonIcon";
import { AppointmentEntity } from "../../components/Appointment";

import BannerImg from '../../assets/banner.png';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Member, MemberEntity } from "../../components/Member";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

type RouteParamsProps = {
  selectedGuild: AppointmentEntity;
}

type GuildWidgetEntity = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberEntity[];
}

export function AppointmentDetails() {
  const route = useRoute();
  const { selectedGuild } = route.params as RouteParamsProps;
  const [guildWidget, setGuildWidget] = useState<GuildWidgetEntity>({} as GuildWidgetEntity);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGuildWidgetInfo() {
    try {
      const response = await api.get(`/guilds/${selectedGuild.guild.id}/widget.json`);
      setGuildWidget(response.data);
    } catch (error) {
      Alert.alert('Vish...', 'Se você tem acesso, verifique as configurações do servidor. O Widget deve estar habilitado.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ? `Junte-se à ${selectedGuild.guild.name}` : guildWidget.instant_invite;

    Share.share({
      message,
      url: guildWidget.instant_invite
    })
  }

  function handleOpenGuildURL() {
    Linking.openURL(guildWidget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidgetInfo();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          selectedGuild.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
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
          <Text style={styles.title}>{selectedGuild.guild.name}</Text>
          <Text style={styles.subtitle}>
            {selectedGuild.description}
          </Text>
        </View>
      </ImageBackground>

      {isLoading
        ? <Loading />
        : <>
            <ListHeader
              title="Jogadores"
              subtitle={`Total ${guildWidget.members.length}`}
            />

            <FlatList
              style={styles.members}
              data={guildWidget.members}
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

            {selectedGuild.guild.owner &&
              <View style={styles.footer}>
                <ButtonIcon
                  title="Entrar na partida"
                  onPress={handleOpenGuildURL}
                />
              </View>
            }
          </>
      }
    </Background>
  )
}