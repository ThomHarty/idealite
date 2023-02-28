import {memo, ReactElement} from 'react';

import {IProfileSwipeButtonsProps} from './ProfileSwipeButtons.types';
import {baseStyles} from './ProfileSwipeButtons.styles';
import {View} from 'react-native';
import {FlatIconButton} from '../../atoms';
import {COLORS} from '../../../theme';

export const ProfileSwipeButtons = memo(
  ({
    onPressCross,
    onPressStar,
    onPressTick,
  }: IProfileSwipeButtonsProps): ReactElement => {
    return (
      <View style={baseStyles.container}>
        <FlatIconButton
          icon="cross"
          backgroundColor={COLORS.WHITE}
          iconColor={COLORS.DANGER}
          diameter={46}
          onPress={onPressCross}
          testID="cross"
        />
        <FlatIconButton
          icon="star"
          backgroundColor={COLORS.WHITE}
          iconColor={COLORS.ACCENT_ONE}
          diameter={46}
          iconSize={24}
          onPress={onPressStar}
          testID="star"
        />
        <FlatIconButton
          icon="tick"
          backgroundColor={COLORS.WHITE}
          iconColor={COLORS.SUCCESS}
          diameter={46}
          onPress={onPressTick}
          testID="tick"
        />
      </View>
    );
  },
);
