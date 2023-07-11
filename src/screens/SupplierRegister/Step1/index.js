import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputName,
  Label,
  LayoutOld,
  CloseButton,
  Separator30,
  Separator28,
  ViewButton,
  Separator44,
  Separator24,
} from "./styles";
import CloseRed from "../../../assets/images/CloseRed";
import Button from "../../../components/Button";

export default function Step1() {
  const navigation = useNavigation();

  return (
    <Container>
      <Separator30 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <CloseRed />
      </CloseButton>
      <Separator28 />
      <LayoutOld>Nome</LayoutOld>
      <Separator44 />
      <Label>Digite o nome do colaborador</Label>
      <Separator24 />
      <InputName 
      placeholder="Nome" 
      placeholderTextColor="#6C7072" />
      <ViewButton>
      <Button onPress={() => navigation.navigate('Step2')} />
      </ViewButton>
    </Container>
  );
}
