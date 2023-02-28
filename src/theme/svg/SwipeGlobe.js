import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function SwipeGlobe(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 54 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_729_13048)">
        <Path
          d="M13.692 13.069s-8.063-2.24-12.306 6.187c-4.243 8.426 2.668 26.107 19.38 25.588 16.711-.52 28.01-6.671 31.836-17.815 1.598-5.248-.285-13.01-4.784-15.47-10.056-4.269-12.137 2.624-20.705 4.367-5.092 1.033-8.4-2-13.421-2.857z"
          fill="url(#paint0_linear_729_13048)"
        />
        <Path
          d="M26.98 38.622c-9.859 0-17.875-8.042-17.875-17.931 0-9.89 8.016-17.938 17.875-17.938 9.858 0 17.873 8.042 17.873 17.932 0 9.89-8.015 17.93-17.873 17.93v.007zm0-34.842c-9.295 0-16.857 7.586-16.857 16.91 0 9.325 7.562 16.911 16.857 16.911 9.294 0 16.856-7.586 16.856-16.91 0-9.325-7.562-16.917-16.856-16.917v.006z"
          fill="#00DAFF"
        />
        <Path
          d="M24.678.45C14.825.45 6.804 8.491 6.804 18.381s8.015 17.931 17.874 17.931c9.858 0 17.874-8.04 17.874-17.93S34.536.45 24.678.45zm-9.8 17.931c0-1.23.08-2.431.226-3.592 2.529-.484 5.61-.793 9.074-.822v8.823c-3.465-.03-6.545-.338-9.074-.822a28.921 28.921 0 01-.226-3.593v.006zm-.82 3.377c-3.895-.87-6.231-2.164-6.231-3.377 0-1.213 2.336-2.501 6.23-3.376a29.128 29.128 0 00-.197 3.376c0 1.155.07 2.28.198 3.377zM25.189 1.494c4.25.379 7.783 5.435 8.917 12.234-2.726-.49-5.842-.752-8.917-.781V1.494zm-1.017 11.458c-3.07.03-6.185.292-8.917.782 1.128-6.8 4.668-11.861 8.917-12.234v11.452zm0 10.864v11.459c-4.25-.38-7.783-5.435-8.917-12.234 2.726.49 5.842.752 8.917.78v-.005zm1.017 0c3.07-.03 6.185-.291 8.917-.781-1.128 6.799-4.668 11.86-8.917 12.234V23.81v.006zm0-1.02v-8.823c3.465.029 6.545.338 9.074.822.145 1.16.227 2.362.227 3.592s-.082 2.432-.227 3.592c-2.529.484-5.61.793-9.074.822v-.005zm10.12-7.785c3.895.869 6.231 2.163 6.231 3.376s-2.33 2.502-6.23 3.376a29.106 29.106 0 000-6.752zm6.11 1.358c-1.274-1.043-3.517-1.86-6.25-2.431-.813-5.272-3.04-9.61-5.969-11.844 6.487 1.814 11.404 7.418 12.218 14.281v-.006zM20.166 2.09c-2.93 2.239-5.156 6.577-5.97 11.843-2.731.572-4.975 1.388-6.248 2.432.814-6.852 5.731-12.462 12.218-14.275zM7.943 20.393c1.273 1.044 3.517 1.86 6.249 2.432.813 5.271 3.04 9.61 5.97 11.843-6.488-1.813-11.405-7.417-12.219-14.28v.005zm21.251 14.281c2.93-2.24 5.156-6.578 5.97-11.843 2.732-.572 4.975-1.388 6.248-2.432-.813 6.857-5.737 12.467-12.218 14.28v-.005z"
          fill="#253358"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_729_13048"
          x1={24.3416}
          y1={15.0874}
          x2={29.8916}
          y2={48.5052}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.35} stopColor="#B0F9FF" />
          <Stop offset={1} stopColor="#71FFFF" />
        </LinearGradient>
        <ClipPath id="clip0_729_13048">
          <Path
            fill="#fff"
            transform="translate(.165 .45)"
            d="M0 0H53V44.4054H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeGlobe;
