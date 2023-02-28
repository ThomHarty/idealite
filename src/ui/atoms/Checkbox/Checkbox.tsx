import React, {memo, ReactElement} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {ICheckboxProps} from './Checkbox.types';
import {baseStyles} from './Checkbox.styles';
import {
  useCheckedColors,
  useDisabledColors,
  useLayoutStyles,
} from './animations';
import {Icon} from '../../../shared/components';

export const Checkbox = memo(
  ({checked, disabled = false, onPress}: ICheckboxProps): ReactElement => {
    const {layout} = useLayoutStyles(checked);
    const {checkedColors} = useCheckedColors({checked});
    const {disabledColors} = useDisabledColors({disabled});
    return (
      <Pressable
        testID="checkbox"
        onPress={onPress}
        style={baseStyles.wrapper}
        disabled={disabled}>
        <Animated.View
          style={[
            baseStyles.container,
            !disabled && checkedColors.container,
            disabled && disabledColors.container,
          ]}>
          <Animated.View style={[baseStyles.center, layout.center]}>
            {!disabled && <Icon name="tick" iconStyles={baseStyles.icon} />}
          </Animated.View>
        </Animated.View>
      </Pressable>
    );
  },
);
