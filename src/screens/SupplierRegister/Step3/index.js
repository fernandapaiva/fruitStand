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
import Button from "../../../components/Button";
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";

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
        <LayoutCurrent>Telefone</LayoutCurrent>
      </LiningContent>
      <Separator30 />
      <Label>Digite o número de telefone do colaborador</Label>
      <Separator15 />
      <InputPhone
        placeholder="(00) 00000-0000"
        placeholderTextColor="#6C7072"
      />
      <ViewButton>
      <Button onPress={() => navigation.navigate('Step4')} />
      </ViewButton>
    </Container>
  );
}
