import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function SwipeLaptop(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 53 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_729_12653)">
        <Path
          d="M13.546 9.921S5.864 7.767 1.829 15.868c-4.041 8.106 2.54 25.115 18.455 24.616 15.914-.5 26.675-6.418 30.318-17.139 1.522-5.048-.271-12.515-4.556-14.883-9.576-4.106-11.558 2.525-19.717 4.202-4.85.993-7.999-1.924-12.781-2.749v.006z"
          fill="url(#paint0_linear_729_12653)"
        />
        <Path
          d="M52.256 27.143a.896.896 0 00-1.002-.768l-4.23.611L43.97 5.31c-.188-1.352-1.428-2.295-2.762-2.104h-.006L10.568 7.66c-1.334.191-2.264 1.453-2.076 2.805l3.056 21.677-4.229.611a.88.88 0 00-.587.354.901.901 0 00-.171.667l.398 2.844a.898.898 0 001.008.769l43.923-6.378a.88.88 0 00.587-.354.901.901 0 00.172-.668l-.399-2.844h.006zM9.4 10.336a1.551 1.551 0 011.296-1.756l30.627-4.448a1.536 1.536 0 011.727 1.312l3.056 21.677-33.656 4.886-3.05-21.67zm41.953 16.97l.393 2.788-43.873 6.367-.394-2.793L51.354 27.3v.006z"
          fill="#00DAFF"
        />
        <Path
          d="M49.914 24.77a.896.896 0 00-1.002-.768l-4.23.611-3.06-21.676C41.432 1.585 40.192.642 38.858.833h-.005L8.22 5.287c-1.334.191-2.264 1.453-2.076 2.805L9.2 29.77l-4.229.611a.88.88 0 00-.586.354.901.901 0 00-.172.667l.399 2.844a.898.898 0 001.007.769l43.924-6.378a.88.88 0 00.587-.354.9.9 0 00.171-.667l-.398-2.845h.01zM7.058 7.958a1.551 1.551 0 011.295-1.756l30.628-4.449a1.536 1.536 0 011.727 1.313l3.056 21.676-33.656 4.886-3.05-21.67zm41.953 16.97l.393 2.787-43.88 6.368-.392-2.794 43.874-6.367.005.005z"
          fill="#253358"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_729_12653"
          x1={23.6552}
          y1={11.6398}
          x2={29.046}
          y2={43.771}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.35} stopColor="#B0F9FF" />
          <Stop offset={1} stopColor="#71FFFF" />
        </LinearGradient>
        <ClipPath id="clip0_729_12653">
          <Path
            fill="#fff"
            transform="translate(.665 .81)"
            d="M0 0H52V39.6842H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeLaptop;
