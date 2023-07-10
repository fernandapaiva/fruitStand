import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  InputPhone,
  Label,
  LayoutOld,
  CloseButton,
  Separator30,
  Separator15,
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
      <Separator15 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <CloseRed />
      </CloseButton>
      <Separator15 />
      <LiningContent>
        <LayoutOld>Nome</LayoutOld>
        <Right />
        <LayoutOld>CPF</LayoutOld>
        <Right />
        <LayoutOld>Telefone</LayoutOld>
        <Right />
        <LayoutCurrent>Frutas</LayoutCurrent>
      </LiningContent>
      <Separator30 />
      <Label>Escolha as frutas que esse fornecedor nos fornece</Label>
      <Separator15 />
      <ViewButton>
      <RedButton onPress={() => navigation.navigate('LestStep')} />
      </ViewButton>
    </Container>
  );
}
