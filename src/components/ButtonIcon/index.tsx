import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
  Image,
  View,
} from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={discordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}