import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {INDAInviteResponseProps} from './NDAInviteResponse.types';
import {baseStyles} from './NDAInviteResponse.styles';
import {COLORS} from '../../../theme';
import {Divider, Typography} from '../../atoms';
import {Icon} from '../../../shared/components';

export const NDAInviteResponse = memo(
  ({
    name,
    isFromAuthedUser = false,
    status = 'accepted',
  }: INDAInviteResponseProps): ReactElement => {
    let text = '';
    if (isFromAuthedUser) {
      text = `You have ${status} the NDA`;
    }

    if (!isFromAuthedUser) {
      text = `${name} has ${status} the NDA`;
    }

    return (
      <View style={baseStyles.container}>
        <View style={baseStyles.dividerContainer}>
          <Divider color={COLORS.GREY} testID="divider" />
        </View>
        <View style={baseStyles.textContainer}>
          {status === 'accepted' && (
            <Icon name="tick" iconStyles={baseStyles.tick} testID="tick" />
          )}
          {status === 'declined' && (
            <Icon name="cross" iconStyles={baseStyles.cross} testID="cross" />
          )}
          <Typography size="text" text={text} />
        </View>
      </View>
    );
  },
);
