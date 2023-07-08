import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Close = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#212324"
      d="m18.121 16 5.938-5.938a1.501 1.501 0 0 0-2.122-2.124L16 13.875l-5.938-5.938a1.503 1.503 0 0 0-2.125 2.125L13.875 16l-5.938 5.938a1.503 1.503 0 0 0 2.125 2.125L16 18.125l5.938 5.938a1.503 1.503 0 0 0 2.125-2.125L18.12 16Z"
    />
  </Svg>
)
export default Close
