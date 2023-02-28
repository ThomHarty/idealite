import {ViewStyle} from 'react-native';

export interface ISlideProps {
  startValue: number;
  handleOnChange: (value: number) => void;
}

export interface SlideStyles {
  container?: ViewStyle;
  leftVr?: ViewStyle;
  hr?: ViewStyle;
  rightVr?: ViewStyle;
  tracker?: ViewStyle;
}
