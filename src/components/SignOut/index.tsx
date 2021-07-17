import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from '../Button';

import { styles } from './styles';

type SignOutProps = {
  handleNegativeButtonClick: () => void;
  handlePositiveButtonClick: () => void;
}

export function SignOut({
  handleNegativeButtonClick,
  handlePositiveButtonClick,
}: SignOutProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        Deseja sair do{' '}
        <Text style={styles.textBold}>Game</Text>
        <Text style={styles.textRed}>Play</Text>
        <Text style={styles.textBold}>?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        {/* RectButton don't works inside modal */}
        <TouchableWithoutFeedback onPress={handleNegativeButtonClick}>
          <Button title="Não" style={styles.outlinedButton} bordered />
        </TouchableWithoutFeedback>
        {/* RectButton don't works inside modal */}
        <TouchableWithoutFeedback onPress={handlePositiveButtonClick}>
          <Button title="Sim" style={{ width: '48%' }} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}