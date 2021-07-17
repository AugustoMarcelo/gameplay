import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from './styles';

export function SmallInput({ ...rest }: TextInputProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.container}
    >
      <TextInput
        style={styles.textContainer}
        keyboardType="numeric"
        {...rest}
      />
    </LinearGradient>
  )
}