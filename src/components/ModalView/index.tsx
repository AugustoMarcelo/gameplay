import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle
} from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  showBar?: boolean;
  containerStyle?: StyleProp<ViewStyle>
}

export function ModalView({
  children,
  showBar = true,
  containerStyle,
  closeModal,
  ...rest
}: ModalViewProps) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={containerStyle ? containerStyle :  styles.container}>
            <Background>
              {showBar && <View style={styles.bar} />}
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}