import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SwipeChemist(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 51 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_729_13076)">
        <Path
          d="M13.404 14.668s-7.62-2.112-11.63 5.837c-4.011 7.948 2.52 24.626 18.316 24.137 15.794-.49 26.474-6.293 30.089-16.805 1.51-4.95-.27-12.272-4.521-14.593-9.505-4.027-11.471 2.475-19.57 4.12-4.812.973-7.938-1.887-12.684-2.696z"
          fill="url(#paint0_linear_729_13076)"
        />
        <Path
          d="M9.672 40.225a.478.478 0 01-.29-.1.492.492 0 01-.188-.318L5.173 11.043a.483.483 0 01.412-.544l21.673-3.036a.491.491 0 01.357.093c.099.077.17.193.187.32l4.021 28.762a.483.483 0 01-.412.545L9.738 40.219h-.066v.006zm-3.477-28.84l3.89 27.811 20.717-2.904-3.89-27.812-20.717 2.904zM39.63 43.129c-.131 0-.268-.005-.4-.017l-.94-.087a4.328 4.328 0 01-3.9-4.71l1.384-14.873a.48.48 0 01.522-.434l8.587.803a.484.484 0 01.434.523l-1.385 14.873a4.328 4.328 0 01-4.296 3.922h-.005zm-2.95-19.12l-1.34 14.395a3.36 3.36 0 003.033 3.658l.94.088c1.829.165 3.482-1.188 3.652-3.036l1.341-14.396-7.63-.71h.005z"
          fill="#00DAFF"
        />
        <Path
          d="M45.31 14.465a2.232 2.232 0 00-2.428 2.019l-.489 5.258-7.63-.71.488-5.258a2.236 2.236 0 00-2.016-2.431.481.481 0 00-.088.957c.34.033.643.192.863.456.22.264.318.595.285.93l-.532 5.737-1.385 14.874a4.328 4.328 0 003.9 4.709l.94.088a4.324 4.324 0 004.697-3.905L43.3 22.313l.533-5.737a1.274 1.274 0 011.384-1.15c.264.034.5-.17.522-.434a.481.481 0 00-.434-.523l.005-.005zM40.96 37.1c-.171 1.849-1.825 3.202-3.654 3.037l-.94-.088a3.364 3.364 0 01-3.032-3.658l1.34-14.396 7.631.71-1.34 14.395h-.006zM7.723 38.272a.478.478 0 01-.292-.1.492.492 0 01-.186-.318L3.229 9.09a.493.493 0 01.093-.358.491.491 0 01.319-.187L25.314 5.51a.482.482 0 01.544.412l4.021 28.763a.492.492 0 01-.093.358.491.491 0 01-.319.187L7.794 38.266h-.066l-.005.006zM4.245 9.437l3.89 27.812 20.717-2.905-3.89-27.811L4.245 9.437z"
          fill="#253358"
        />
        <Path
          d="M10.15 13.304a.478.478 0 01-.29-.099.492.492 0 01-.187-.319l-.324-2.327a.483.483 0 01.412-.544L19.83 8.6a.483.483 0 01.544.413l.324 2.327a.493.493 0 01-.094.357.491.491 0 01-.318.187L10.217 13.3h-.066v.005zm.22-2.398l.193 1.37 9.114-1.277-.192-1.37-9.114 1.277zM10.81 18.04a.489.489 0 01-.478-.412.483.483 0 01.412-.545l10.07-1.408a.483.483 0 01.132.957l-10.07 1.408h-.066zM11.135 20.367a.489.489 0 01-.478-.412.483.483 0 01.412-.545l10.07-1.408a.484.484 0 01.132.957l-10.07 1.408h-.066z"
          fill="#253358"
        />
        <Path
          d="M9.992 35.038a.478.478 0 01-.292-.1.492.492 0 01-.186-.319L6.37 12.166a.483.483 0 01.412-.545l2.66-.374a.483.483 0 01.131.957l-2.18.308 3.004 21.508 15.394-2.156-3.005-21.508-2.181.308a.483.483 0 11-.132-.957l2.659-.374a.491.491 0 01.357.093c.099.077.17.193.187.32l3.137 22.459a.483.483 0 01-.412.544l-16.344 2.288h-.066zM34.849 9.074a1.894 1.894 0 01-1.89-1.892 1.89 1.89 0 113.78 0 1.89 1.89 0 01-1.89 1.892zm0-2.816a.931.931 0 00-.929.93c0 .511.418.93.929.93a.931.931 0 00.928-.93.931.931 0 00-.928-.93zM39.048 13.299a1.889 1.889 0 010-3.78c1.039 0 1.89.848 1.89 1.893a1.886 1.886 0 01-1.89 1.887zm0-2.817a.927.927 0 000 1.854.934.934 0 00.929-.924.935.935 0 00-.929-.93zM39.048 4.432a1.889 1.889 0 010-3.78c1.039 0 1.89.848 1.89 1.893a1.886 1.886 0 01-1.89 1.887zm0-2.817a.927.927 0 000 1.854.934.934 0 00.929-.924.935.935 0 00-.929-.93z"
          fill="#253358"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_729_13076"
          x1={23.6806}
          y1={16.2803}
          x2={28.9063}
          y2={47.8067}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#B0F9FF" />
          <Stop offset={1} stopColor="#71FFFF" />
        </LinearGradient>
        <ClipPath id="clip0_729_13076">
          <Path
            fill="#fff"
            transform="translate(.62 .653)"
            d="M0 0H50.0923V44H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SwipeChemist