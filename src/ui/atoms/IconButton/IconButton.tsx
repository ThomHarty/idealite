import {ReactElement, useState} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {Icon} from '../../../shared/components';
import {useLayoutStyles} from './animations';
import {IIconButtonProps} from './IconButton.types';
import {useStyles} from './useStyles';

export const IconButton = ({
  size = 'small',
  iconColor,
  disabled = false,
  icon,
  onPress,
  testID,
}: IIconButtonProps): ReactElement => {
  const [pressed, setPressed] = useState(false);
  const {layout} = useLayoutStyles({pressed, disabled});
  const baseStyles = useStyles({size, iconColor});

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
      testID={testID || 'icon-button'}
      style={baseStyles.wrapper}>
      <Animated.View style={[baseStyles.container, layout.container]}>
        <Icon name={icon} iconStyles={baseStyles.icon} />
      </Animated.View>
    </Pressable>
  );
};
