import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SwipePlane(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 53 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_728_12952)">
        <Path
          d="M13.936 15.88s-7.91-2.182-12.073 6.026 2.618 25.43 19.014 24.925c16.396-.506 27.483-6.498 31.235-17.353 1.569-5.112-.28-12.673-4.693-15.07-9.866-4.158-11.908 2.556-20.314 4.255-4.996 1.005-8.241-1.949-13.169-2.784z"
          fill="url(#paint0_linear_728_12952)"
        />
        <Path
          d="M27.008 45.269a.51.51 0 01-.468-.312l-.45-1.131a.49.49 0 01.068-.483l3.855-5.027c-1.591-2.59-3.49-6.197-5.657-10.736L9.31 38.175a.48.48 0 01-.427.068.487.487 0 01-.32-.295l-1.317-3.312a.496.496 0 01.085-.505l3.599-4.21-.553-1.385a1.203 1.203 0 01.678-1.562l1.267-.5a1.21 1.21 0 011.311.278l1.928-2.255-.605-1.522a1.197 1.197 0 01.673-1.562l1.266-.5a1.21 1.21 0 011.398.375l2.138-2.505C15.396 6.019 18.048 3.468 18.368 3.218a.483.483 0 01.262-.102c.405-.034 4.095.006 9.21 12.735l3.285.364a1.195 1.195 0 01.759-1.233l1.266-.5a1.21 1.21 0 011.568.67l.605 1.523 2.96.323c.005-.471.296-.92.764-1.102l1.266-.5a1.21 1.21 0 011.568.67l.553 1.387 5.515.608a.51.51 0 01.41.312l1.318 3.311a.48.48 0 01-.034.432.517.517 0 01-.36.244L31.04 24.916c1.545 4.783 2.646 8.708 3.268 11.679l6.261 1.028c.171.028.32.142.383.307l.45 1.13a.488.488 0 01-.028.426.508.508 0 01-.348.25l-6.12 1.119c.012.466-.011.852-.074 1.159a.95.95 0 01-.587.704.956.956 0 01-.913-.114c-.25-.176-.536-.443-.85-.795l-5.223 3.363a.513.513 0 01-.274.08l.023.017zm.12-1.551l.12.306 5.075-3.271a.497.497 0 01.656.102c.428.511.724.778.907.92.04-.227.068-.625.028-1.283a.5.5 0 01.41-.523l5.949-1.085-.12-.307-6.325-1.04a.49.49 0 01-.404-.391c-.628-3.084-1.803-7.276-3.49-12.468a.483.483 0 01.05-.415.484.484 0 01.354-.227l18.204-2.55-.975-2.448-5.515-.608a.51.51 0 01-.41-.313l-.662-1.664a.198.198 0 00-.114-.113.214.214 0 00-.16 0l-1.266.5a.214.214 0 00-.12.272l.12.295a.49.49 0 01-.068.483.514.514 0 01-.45.193l-3.981-.437a.51.51 0 01-.411-.313l-.719-1.8a.199.199 0 00-.114-.114.215.215 0 00-.16 0l-1.265.5a.198.198 0 00-.114.114.212.212 0 000 .159l.17.431a.49.49 0 01-.068.483.515.515 0 01-.45.193l-4.317-.477a.492.492 0 01-.44-.312C22.816 5.854 19.651 4.354 18.915 4.15c-.4.647-1.688 3.84 2.584 14.547 0 .011.011.023.011.034a.497.497 0 01-.108.5l-2.823 3.3a.525.525 0 01-.462.17.503.503 0 01-.382-.306l-.171-.432a.199.199 0 00-.114-.114.215.215 0 00-.16 0l-1.266.5a.198.198 0 00-.114.114.211.211 0 000 .159l.718 1.8a.496.496 0 01-.085.506l-2.595 3.039a.505.505 0 01-.462.17.492.492 0 01-.382-.307l-.12-.295a.213.213 0 00-.274-.12l-1.266.5a.214.214 0 00-.12.273l.662 1.665a.496.496 0 01-.086.505l-3.598 4.21.975 2.447 15.01-10.57a.493.493 0 01.417-.074.51.51 0 01.325.267c2.338 4.93 4.374 8.787 6.04 11.462a.495.495 0 01-.03.563l-3.889 5.072-.022-.017z"
          fill="#00DAFF"
        />
        <Path
          d="M24.338 42.61a.51.51 0 01-.468-.312l-.45-1.13a.49.49 0 01.068-.483l3.855-5.027c-1.59-2.59-3.49-6.197-5.657-10.736L6.64 35.51a.481.481 0 01-.427.068.487.487 0 01-.32-.295L4.577 31.97a.496.496 0 01.085-.505l3.599-4.21-.553-1.385a1.197 1.197 0 01.673-1.562l1.266-.5a1.21 1.21 0 011.312.278l1.927-2.255-.604-1.522a1.197 1.197 0 01.673-1.562l1.266-.5a1.202 1.202 0 011.397.38l2.138-2.504C12.738 3.372 15.39.82 15.71.57a.483.483 0 01.263-.102c.404-.034 4.089.006 9.21 12.735l3.285.364a1.195 1.195 0 01.758-1.233l1.266-.5a1.21 1.21 0 011.569.67l.604 1.523 2.96.323c.006-.47.297-.92.764-1.101l1.266-.5a1.21 1.21 0 011.569.67l.553 1.386 5.515.608a.51.51 0 01.41.312l1.318 3.312a.48.48 0 01-.035.431.505.505 0 01-.359.245L28.381 22.27c1.546 4.782 2.646 8.707 3.268 11.678l6.262 1.028c.171.029.32.142.382.307l.45 1.13a.488.488 0 01-.028.426.508.508 0 01-.348.25l-6.12 1.12c.012.465-.01.857-.073 1.158a.959.959 0 01-.588.704.97.97 0 01-.912-.108c-.251-.176-.536-.443-.85-.795L24.6 42.531a.513.513 0 01-.274.08h.012zm.12-1.55l.12.306 5.075-3.272a.497.497 0 01.656.103c.428.511.724.778.907.92.04-.227.068-.62.028-1.284a.5.5 0 01.41-.522l5.949-1.085-.12-.307-6.324-1.04a.49.49 0 01-.405-.391c-.628-3.085-1.803-7.277-3.49-12.468a.483.483 0 01.05-.415.484.484 0 01.354-.227l18.204-2.55-.975-2.449-5.515-.607a.51.51 0 01-.41-.313l-.662-1.664a.198.198 0 00-.114-.114.214.214 0 00-.16 0l-1.266.5a.214.214 0 00-.12.273l.12.295a.49.49 0 01-.068.483.495.495 0 01-.45.193l-3.981-.437a.51.51 0 01-.41-.313l-.72-1.8a.198.198 0 00-.114-.114.214.214 0 00-.16 0l-1.265.5a.198.198 0 00-.114.114.212.212 0 000 .159l.17.431a.5.5 0 01-.519.676l-4.316-.477a.492.492 0 01-.44-.312c-4.265-10.673-7.39-12.156-8.16-12.36-.405.653-1.677 3.85 2.583 14.54 0 .012.011.024.011.035a.496.496 0 01-.108.5l-2.823 3.3a.524.524 0 01-.462.17.503.503 0 01-.382-.306l-.171-.432a.198.198 0 00-.114-.114.214.214 0 00-.16 0l-1.272.5a.198.198 0 00-.114.114.212.212 0 000 .159l.719 1.8a.496.496 0 01-.086.506l-2.595 3.039a.505.505 0 01-.462.17.492.492 0 01-.382-.306l-.12-.296a.199.199 0 00-.114-.113.215.215 0 00-.16 0l-1.265.5a.198.198 0 00-.114.113.212.212 0 000 .159l.661 1.664a.496.496 0 01-.085.506l-3.599 4.209.975 2.448 15.01-10.57a.514.514 0 01.417-.075.51.51 0 01.325.267c2.338 4.93 4.374 8.788 6.04 11.463a.495.495 0 01-.029.562l-3.89 5.073v-.017z"
          fill="#253358"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_728_12952"
          x1={24.6485}
          y1={17.2266}
          x2={30.0178}
          y2={49.7907}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#B0F9FF" />
          <Stop offset={1} stopColor="#71FFFF" />
        </LinearGradient>
        <ClipPath id="clip0_728_12952">
          <Path
            fill="#fff"
            transform="translate(.665 .464)"
            d="M0 0H52V46.3784H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SwipePlane
