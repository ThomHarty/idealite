import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function Location(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 198 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_33_5543)">
        <Path
          d="M121.586 99.524c-23.15-27.36-9.826-68.34-55.99-76.256C23.68 21.231 7.984 61.858 2.776 82.69c-8.628 34.505 13.94 84.286 49.027 110.26 49.288 36.485 136.347 20.4 144.051-17.376 7.704-37.776-23.885-51.1-23.885-51.1-18.325-10.005-36.63-8.705-50.383-24.95z"
          fill="url(#paint0_linear_33_5543)"
        />
        <Path
          d="M111.116 154.971h-1.7l-.386-.214c-19.305-10.74-64.212-40.292-64.212-82.648A65.12 65.12 0 01109.864 7.06h.806a65.12 65.12 0 0165.048 65.05c0 42.358-44.907 71.91-64.215 82.65l-.387.211zm-1.251-144.488A61.69 61.69 0 0048.246 72.11c0 40.232 43.017 68.777 62.021 79.414 19.006-10.637 62.023-39.182 62.023-79.414a61.691 61.691 0 00-61.62-61.623l-.805-.003z"
          fill="#5BD7FF"
        />
        <Path
          d="M110.267 102.893a30.386 30.386 0 1130.389-30.387 30.421 30.421 0 01-30.389 30.387zm0-57.346a26.96 26.96 0 1026.961 26.96 26.995 26.995 0 00-26.961-26.96z"
          fill="#5BD7FF"
        />
        <Path
          d="M99.778 147.914h-1.7l-.386-.214c-19.304-10.74-64.211-40.292-64.211-82.648A65.12 65.12 0 0198.527.002h.805a65.12 65.12 0 0165.048 65.05c0 42.359-44.907 71.911-64.215 82.651l-.387.211zM98.528 3.426a61.69 61.69 0 00-61.62 61.626c0 40.232 43.017 68.777 62.022 79.414 19.005-10.637 62.022-39.182 62.022-79.414a61.69 61.69 0 00-61.62-61.623l-.804-.003z"
          fill="#283355"
        />
        <Path
          d="M98.929 95.836a30.387 30.387 0 1130.389-30.387 30.421 30.421 0 01-30.389 30.387zm0-57.346a26.96 26.96 0 1026.961 26.959A26.995 26.995 0 0098.929 38.49z"
          fill="#283355"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_33_5543"
          x1={98.9991}
          y1={23.1943}
          x2={98.9991}
          y2={213.482}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C0F7FF" />
          <Stop offset={1} stopColor="#9FF" />
        </LinearGradient>
        <ClipPath id="clip0_33_5543">
          <Path
            fill="#fff"
            transform="translate(.934)"
            d="M0 0H196.132V213.481H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Location