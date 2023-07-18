import React from "react";
import { ButtonRegister, TitleButton, SepatorItem } from "./styles";
import RightRed from "../../assets/images/RightRed";

export default function Button({ onPress }) {
  return (
    <ButtonRegister activeOpacity={0.7} onPress={() => onPress()}>
      <TitleButton>Próximo</TitleButton>
      <SepatorItem />
      <RightRed />
    </ButtonRegister>
  );
}
