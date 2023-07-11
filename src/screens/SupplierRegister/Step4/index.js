import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  LiningContent,
  LayoutCurrent,
  ViewButton,
} from "./styles";
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";
import RedButton from "../../../components/RedButton";

export default function Step3() {

  const navigation = useNavigation();

  return (
    <Container>
      <Separator24 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <CloseRed />
      </CloseButton>
      <Separator24 />
      <LiningContent>
        <LayoutOld>Nome</LayoutOld>
        <Right />
        <LayoutOld>CPF</LayoutOld>
        <Right />
        <LayoutOld>Telefone</LayoutOld>
        <Right />
        <LayoutCurrent>Frutas</LayoutCurrent>
      </LiningContent>
      <Separator40 />
      <Label>Escolha as frutas que esse fornecedor nos fornece</Label>
      <Separator24 />
      <ViewButton>
      <RedButton onPress={() => navigation.navigate('LestStep')} />
      </ViewButton>
    </Container>
  );
}
