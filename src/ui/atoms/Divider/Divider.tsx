import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {IDividerProps} from './Divider.types';
import {useStyles} from './useStyles';

export const Divider = memo(({color, testID}: IDividerProps): ReactElement => {
  const styles = useStyles(color);
  return <View testID={testID || 'divider'} style={styles.divider} />;
});
