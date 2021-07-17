import React from 'react';
import { Image, View } from 'react-native';

import DiscordSvg from '../../assets/discord.svg';
import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: GuildIconProps) {
  // const uri = 'https://assets.materialup.com/uploads/c4ea2753-8ad6-49b6-9d3e-68eb8564e803/teaser.png';
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  return (
    <View style={styles.container}>
      {
        iconId
          ? <Image source={{ uri }} style={styles.image} resizeMode="cover" />
          : <DiscordSvg width={40} height={40} />
      }
    </View>
  )
}