declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const element: React.FC<SvgProps>;
  export default element;
}