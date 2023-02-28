import {ViewStyle} from 'react-native';

import {IImageProps} from '../../atoms';

export interface IAddSkillsTemplateProps {
  onPressBack: () => void;
  onPressNext: () => void;
  onPressAdd: () => void;
  avatar: IImageProps['src'];
  skills: string[];
  editOnPress: (skill: string) => void;
}

export interface AddSkillsTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  avatarContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  addSkillContainer?: ViewStyle;
}
