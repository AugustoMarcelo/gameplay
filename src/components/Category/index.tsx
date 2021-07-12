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
  hasCheck?: boolean
}

export function Category({
  title,
  icon: Icon,
  hasCheck = false,
  isChecked = false,
  ...rest
}: CategoryProps) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: isChecked ? 1 : 0.5 }]}
          colors={[ isChecked ? secondary85 : secondary50, secondary40 ]}
        >
          {hasCheck && (
            <View style={isChecked ? styles.checked : styles.default} />
          )}
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}