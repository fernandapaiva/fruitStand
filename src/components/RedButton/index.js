import React from "react";
import { Button, TitleButton, SepatorItem } from "./styles";
import Adding from "../../assets/images/Adding";

export default function RedButton({ onPress }) {
  return (
    <Button activeOpacity={0.7}
     onPress={() => onPress()}>
      <Adding />
      <SepatorItem />
      <TitleButton>Cadastrar Fornecedor</TitleButton>
    </Button>
  );
}
