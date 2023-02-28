import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {IUserCardProps} from './UserCard.types';
import {SwipeUserInfo} from '../../molecules';
import {Chip, Typography} from '../../atoms';
import {SvgSwitch} from '../../../shared/components';
import {useStyles} from './useStyles';

export const UserCard = memo(
  ({swipeUserInfo, blurb, tags}: IUserCardProps): ReactElement => {
    const baseStyles = useStyles();

    return (
      <View style={baseStyles.container}>
        <View style={baseStyles.topHalfContainer}>
          <View style={baseStyles.svgContainer}>
            <SvgSwitch svg="phone" />
          </View>
          <SwipeUserInfo {...swipeUserInfo} />
        </View>
        <View style={baseStyles.bottomHalfContainer}>
          <View style={baseStyles.blurbContainer}>
            <Typography text={blurb} size="tiny" lineHeight={21} />
          </View>
          <View style={baseStyles.tagsContainer}>
            {tags.map((tag, key) => {
              return (
                <View key={key} style={baseStyles.tag}>
                  <Chip text={tag} variant="tertiary" />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  },
);
