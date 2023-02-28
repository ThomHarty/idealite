import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Facebook(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.636 7.848H6.273V11h2.363v9.454h3.94V11h2.87l.281-3.152h-3.151V6.535c0-.752.151-1.05.878-1.05h2.273v-3.94h-3c-2.833 0-4.09 1.248-4.09 3.636v2.667z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Facebook;
