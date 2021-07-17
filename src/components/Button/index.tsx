import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text, View
} from 'react-native';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  bordered?: boolean;
}

export function Button({
  title,
  bordered = false,
  style,
  enabled,
  ...rest
}: ButtonProps) {
  console.log(enabled)
  return (
    <RectButton style={[
      styles.container, enabled === false && styles.disabled,
      style
    ]} {...rest}
    >
      {bordered
        ? (
          <View style={[styles.border]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )
      }

    </RectButton>
  )
}