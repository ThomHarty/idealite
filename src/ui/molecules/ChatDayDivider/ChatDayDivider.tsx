import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {IChatDayDividerProps} from './ChatDayDivider.types';
import {baseStyles} from './ChatDayDivider.styles';
import {Divider, Typography} from '../../atoms';
import {COLORS} from '../../../theme';

export const ChatDayDivider = memo(
  ({text}: IChatDayDividerProps): ReactElement => {
    return (
      <View style={baseStyles.container}>
        <View style={baseStyles.dividerContainer}>
          <Divider color={COLORS.GREY} testID="divider" />
        </View>
        <View style={baseStyles.textContainer}>
          <Typography text={text} color={COLORS.GREY_DARK} size="tiny" />
        </View>
      </View>
    );
  },
);
