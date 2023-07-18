import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Pencil = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#212324"
      fillRule="evenodd"
      d="M19.19 2.69a1.5 1.5 0 0 1 2.12 0l-.53.53.53-.53a1.5 1.5 0 0 1 0 2.12l-1.06 1.061a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 0-1.061l1.06-1.06.53.53-.53-.53ZM17.068 5.12a.75.75 0 0 1 .53.22L18.66 6.4a.75.75 0 0 1 0 1.061l-13.02 12.99a.753.753 0 0 1-.189.138l-2.109 1.078a.75.75 0 0 1-1.009-1.01L3.41 18.55a.75.75 0 0 1 .137-.188l12.99-13.02a.75.75 0 0 1 .531-.22Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Pencil

