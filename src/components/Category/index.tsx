import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  isChecked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  isChecked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: isChecked ? 1 : 0.4 }]}>
          <View style={isChecked ? styles.checked : styles.default} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}