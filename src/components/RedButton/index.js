import React from "react";
import { Button, TitleButton, SepatorItem } from "./styles";
import Adding from "../../assets/images/Adding";

export default function RedButton({ onPress, title, Icon = true }) {
  return (
    <Button activeOpacity={0.7} onPress={() => onPress()}>
      {Icon && (
        <>
          <Adding />
          <SepatorItem />
        </>
      )}
      <TitleButton>{title}</TitleButton>
    </Button>
  );
}
