import {memo, ReactElement} from 'react';
import {Text, View} from 'react-native';

import {IChipProps} from './Chip.types';
import {useStyles} from './useStyles';

export const Chip = memo(
  ({text, variant = 'primary'}: IChipProps): ReactElement => {
    const baseStyles = useStyles(variant);
    return (
      <View style={baseStyles.container}>
        <Text style={baseStyles.text}>{text}</Text>
      </View>
    );
  },
);
