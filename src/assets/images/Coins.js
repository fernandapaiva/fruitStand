import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Coins = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M12 9.75c4.97 0 9-1.679 9-3.75 0-2.071-4.03-3.75-9-3.75S3 3.929 3 6c0 2.071 4.03 3.75 9 3.75ZM21 10.031c0 2.071-4.031 3.75-9 3.75s-9-1.679-9-3.75M21 14.063c0 2.07-4.031 3.75-9 3.75s-9-1.68-9-3.75"
    />
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M3 5.964v12.072c0 2.05 4.031 3.714 9 3.714s9-1.663 9-3.714V5.964"
    />
  </Svg>
)
export default Coins
