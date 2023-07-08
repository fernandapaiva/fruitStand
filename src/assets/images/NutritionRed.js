import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NutritionRed = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#DA0D1E"
      stroke="#DA0D1E"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M25.25 9c-2.268-.203-4.5 1.125-6.75 1.125S14.018 8.79 11.75 9C7.25 9.422 5 13.5 5 20.25c0 5.625 4.5 13.5 7.819 13.5 3.318 0 3.652-1.687 5.681-1.687 2.03 0 2.362 1.687 5.681 1.687 3.32 0 7.819-7.875 7.819-13.5C32 13.5 29.96 9.422 25.25 9Z"
    />
    <Path
      fill="#DA0D1E"
      d="M23.276 5.845c-1.477 1.477-3.21 1.899-4.136 2.025a.563.563 0 0 1-.64-.614 6.863 6.863 0 0 1 2.012-4.172c1.546-1.547 3.234-1.891 4.128-1.958a.563.563 0 0 1 .61.627 6.89 6.89 0 0 1-1.974 4.092Z"
    />
    <Path
      fill="#F0F4F7"
      d="M15.688 24.75c.931 0 1.687-1.511 1.687-3.375S16.619 18 15.687 18C14.756 18 14 19.511 14 21.375s.755 3.375 1.688 3.375ZM21.313 24.75c.931 0 1.687-1.511 1.687-3.375S22.244 18 21.312 18c-.931 0-1.687 1.511-1.687 3.375s.756 3.375 1.688 3.375Z"
    />
  </Svg>
)
export default NutritionRed
