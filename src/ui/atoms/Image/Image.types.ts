import {ImageStyle} from 'react-native';

export type Size =
  | 'default'
  | 'avatarTiny'
  | 'avatarSmall'
  | 'avatarMedium'
  | 'avatarLarge';

export interface IImageProps {
  src: string;
  size?: Size;
  testID?: string;
}

export interface ImageStyles {
  image?: ImageStyle;
}
