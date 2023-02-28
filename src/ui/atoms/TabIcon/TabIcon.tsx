import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Icon} from '../../../shared/components';
import {useActiveColors, useLayoutStyles} from './animations';
import {baseStyles} from './TabIcon.styles';
import {ITabIconProps} from './TabIcon.types';

export const TabIcon = memo(
  ({
    icon,
    active = false,
    unread = false,
    isLikesSent,
  }: ITabIconProps): ReactElement => {
    const {activeColors} = useActiveColors({active});
    const {layout} = useLayoutStyles(unread);
    return (
      <View style={baseStyles.iconContainer}>
        <Animated.Text
          style={[
            !isLikesSent && activeColors.icon,
            isLikesSent && activeColors.likesSentIcon,
          ]}>
          <Icon name={icon} iconStyles={baseStyles.icon} />
        </Animated.Text>
        <Animated.View style={[baseStyles.unread, layout.unread]} />
        {isLikesSent && (
          <Animated.Text
            style={[baseStyles.smallIconContainer, activeColors.smallIcon]}>
            <Icon name="sent" iconStyles={baseStyles.smallIcon} />
          </Animated.Text>
        )}
      </View>
    );
  },
);
