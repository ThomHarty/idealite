import {ViewStyle} from 'react-native';

import {IImageProps} from '../../atoms';

export interface IUserRoleTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
  onSelected: (value: 'idea' | 'skillset') => void;
  avatar: IImageProps['src'];
}

export interface UserRoleTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  avatarContainer?: ViewStyle;
  selectContainer?: ViewStyle;
  itemContainer?: ViewStyle;
  itemTextContainer?: ViewStyle;
  textContainer?: ViewStyle;
}
