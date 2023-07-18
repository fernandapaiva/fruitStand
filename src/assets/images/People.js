import * as React from "react"
import Svg, { Path } from "react-native-svg"
const People = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      stroke="#383B3D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.766 11.824c-.206 2.86-2.328 5.063-4.641 5.063s-4.438-2.203-4.64-5.063c-.212-2.975 1.854-5.062 4.64-5.062 2.787 0 4.852 2.141 4.64 5.062Z"
    />
    <Path
      stroke="#383B3D"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M24.125 21.387c-4.582 0-8.989 2.276-10.093 6.708-.146.587.222 1.167.824 1.167h18.538c.603 0 .968-.58.824-1.167-1.104-4.503-5.51-6.708-10.093-6.708Z"
    />
    <Path
      stroke="#383B3D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.562 13.086c-.164 2.283-1.878 4.082-3.726 4.082S7.27 15.37 7.109 13.086c-.168-2.376 1.5-4.074 3.727-4.074 2.226 0 3.894 1.741 3.726 4.074Z"
    />
    <Path
      stroke="#383B3D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M14.984 21.527c-1.269-.581-2.667-.805-4.148-.805-3.656 0-7.179 1.818-8.061 5.358-.116.469.177.932.658.932h7.895"
    />
  </Svg>
)
export default People

