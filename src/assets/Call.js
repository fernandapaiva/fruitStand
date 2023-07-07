import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Call = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6C7072"
      strokeMiterlimit={10}
      d="M21.14 17.531c-.744-.75-2.546-1.844-3.421-2.285-1.14-.574-1.233-.621-2.128.044-.597.444-.994.84-1.693.692-.7-.15-2.218-.99-3.548-2.316-1.33-1.325-2.219-2.888-2.368-3.585-.15-.696.253-1.089.693-1.687.62-.844.573-.984.043-2.124-.413-.885-1.54-2.671-2.292-3.412-.806-.796-.806-.655-1.324-.44a7.507 7.507 0 0 0-1.211.646c-.75.498-1.166.912-1.458 1.534-.29.622-.421 2.08 1.082 4.812 1.503 2.73 2.558 4.127 4.74 6.304 2.184 2.177 3.862 3.347 6.316 4.723 3.036 1.7 4.2 1.37 4.824 1.079.624-.291 1.04-.703 1.54-1.453.251-.383.468-.788.646-1.21.216-.517.357-.517-.44-1.322Z"
    />
  </Svg>
)
export default Call