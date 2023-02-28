import {ViewStyle} from 'react-native';

import {IAccountHeaderProps} from '../../molecules';
import {ITryPremiumBannerProps} from '../../organisms';

export interface IAccountTemplateProps {
  accountHeader: IAccountHeaderProps;
  onPressAccount: () => void;
  onPressNotifications: () => void;
  onPressBilling: () => void;
  onPressPromotions: () => void;
  onPressHelp: () => void;
  onPressPrivacy: () => void;
  onPressTerms: () => void;
  onPressContact: () => void;
  onPressLogOut: () => void;
  tryPremium: ITryPremiumBannerProps;
}

export interface AccountTemplateStyles {
  container?: ViewStyle;
}
