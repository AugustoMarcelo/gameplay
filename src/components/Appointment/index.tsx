import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildEntity = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean
}

export type AppointmentEntity = {
  id: string;
  guild: GuildEntity;
  category: string;
  date: string;
  description: string;
}

type AppointmentProps = RectButtonProps & {
  data: AppointmentEntity
}

export function Appointment({
  data,
  ...rest
}: AppointmentProps) {
  const category = categories.find(item => item.id === data.category);
  const { owner } = data.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
          <GuildIcon />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            <Text style={styles.category}>
              {category?.title}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={owner ? theme.colors.primary : theme.colors.on}
              />
              <Text style={[
                styles.player,
                { color: owner ? theme.colors.primary : theme.colors.on }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}