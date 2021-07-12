import React from 'react';
import { View, ViewProps } from 'react-native';

import { styles } from './styles';

type ListSeparatorProps = ViewProps;

export function ListSeparator({ style, ...rest }: ListSeparatorProps) {
  return (
    <View style={[styles.container, style]} {...rest} />
  )
}