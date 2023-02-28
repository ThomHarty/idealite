import {ReactElement} from 'react';

import {AccountTemplate, IAccountTemplateProps} from '../../ui/templates';

export const Account = ({navigation}: any): ReactElement => {
  const isPremium = true;

  const props: IAccountTemplateProps = {
    accountHeader: {
      avatarStatus: {
        avatar: 'https://placeimg.com/640/480/people',
        online: true,
      },
      name: 'John Doe',
      title: 'CEO of Company Ltd.',
      location: 'London, United Kingdom',
      joined: 'January, 2021',
      onPressEdit: () => navigation.navigate('AccountSettings'),
      onPressSeeMore: () => console.log('see more pressed'),
    },
    onPressAccount: () => navigation.navigate('EditProfile'),
    onPressNotifications: () => navigation.navigate('Notifications'),
    onPressBilling: isPremium
      ? () => navigation.navigate('PremiumBilling')
      : () => navigation.navigate('NonPremiumBilling'),
    onPressPromotions: () => console.log('promotions pressed'),
    onPressHelp: () => console.log('help pressed'),
    onPressPrivacy: () => console.log('privacy pressed'),
    onPressTerms: () => console.log('terms pressed'),
    onPressContact: () => console.log('contact pressed'),
    onPressLogOut: () => console.log('logout pressed'),
    tryPremium: {
      onPress: () => console.log('try premium pressed'),
    },
  };

  return <AccountTemplate {...props} />;
};
