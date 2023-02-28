import React, {ReactElement} from 'react';
import {Pressable} from 'react-native';

import {IArrowNavItemProps} from './ArrowNavItem.types';
import {baseStyles} from './ArrowNavItem.styles';
import {Divider, Typography} from '../../atoms';
import {Icon} from '../../../shared/components';

export const ArrowNavItem = ({
  text,
  onPress,
}: IArrowNavItemProps): ReactElement => {
  return (
    <>
      <Pressable style={baseStyles.container} onPress={onPress}>
        <Typography text={text} />
        <Icon name="right-chevron" testID="icon" />
      </Pressable>
      <Divider />
    </>
  );
};
