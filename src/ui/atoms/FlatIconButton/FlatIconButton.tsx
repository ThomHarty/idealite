import {ReactElement, useState} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {Icon} from '../../../shared/components';
import {useLayoutStyles} from './animations';
import {IFlatIconButtonProps} from './FlatIconButton.types';
import {useStyles} from './useStyles';

export const FlatIconButton = ({
  iconColor,
  backgroundColor,
  borderColor,
  disabled = false,
  icon,
  onPress,
  diameter,
  iconSize,
  testID,
}: IFlatIconButtonProps): ReactElement => {
  const [pressed, setPressed] = useState(false);
  const {layout} = useLayoutStyles({pressed, disabled});
  const baseStyles = useStyles({
    iconColor,
    backgroundColor,
    borderColor,
    diameter,
    iconSize,
  });

  const handlePressedIn = () => {
    setPressed(true);
  };

  const handlePressedOut = () => {
    setTimeout(() => setPressed(false), 100);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressedIn}
      onPressOut={handlePressedOut}
      disabled={disabled}
      testID={testID || 'flat-icon-button'}
      style={baseStyles.wrapper}>
      <Animated.View style={[baseStyles.container, layout.container]}>
        <Icon name={icon} iconStyles={baseStyles.icon} />
      </Animated.View>
    </Pressable>
  );
};
