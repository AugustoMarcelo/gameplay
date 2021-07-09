import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://assets.materialup.com/uploads/c4ea2753-8ad6-49b6-9d3e-68eb8564e803/teaser.png';

  return (
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
  )
}