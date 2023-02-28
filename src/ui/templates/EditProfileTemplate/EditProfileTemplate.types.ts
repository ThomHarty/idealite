import {TextStyle, ViewStyle} from 'react-native';

import {ISvgSwitchProps} from '../../../shared/components';

export interface IEditProfileTemplateProps {
  onPressSave: () => void;
  onPressCancel: () => void;
  onPressUpload: () => void;
  avatar?: string;
  name: string;
  onPressName: () => void;
  tagline: string;
  onPressTagline: () => void;
  location: string;
  onPressLocation: () => void;
  swipeIcon: ISvgSwitchProps['svg'];
  onPressSwipeIcon: (icon: ISvgSwitchProps['svg']) => void;
}

export interface EditProfileTemplateStyles {
  container?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
  avatarContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  itemContainer?: ViewStyle;
  fakeInputContainer?: ViewStyle;
  fakeInputIconContainer?: ViewStyle;
  fakeInputIcon?: TextStyle;
  svgsContainer?: ViewStyle;
  svgsTextContainer?: ViewStyle;
  svgRow?: ViewStyle;
  svg?: ViewStyle;
}
