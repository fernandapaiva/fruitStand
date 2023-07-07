import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Right = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#6C7072"
      fillRule="evenodd"
      d="M7.83 19.546a1.125 1.125 0 0 1 0-1.591L13.784 12 7.829 6.045a1.125 1.125 0 0 1 1.592-1.59l6.75 6.75c.439.439.439 1.151 0 1.59l-6.75 6.75c-.44.44-1.152.44-1.591 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Right
