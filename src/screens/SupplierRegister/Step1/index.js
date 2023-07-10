import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputName,
  Label,
  LayoutOld,
  CloseButton,
  Separator30,
  Separator15,
  ViewButton,
} from "./styles";
import CloseRed from "../../../assets/images/CloseRed";
import Button from "../../../components/Button";

export default function Step1() {
  const navigation = useNavigation();

  return (
    <Container>
      <Separator15 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <CloseRed />
      </CloseButton>
      <Separator15 />
      <LayoutOld>Nome</LayoutOld>
      <Separator30 />
      <Label>Digite o nome do colaborador</Label>
      <InputName 
      placeholder="Nome" 
      placeholderTextColor="#6C7072" />
      <ViewButton>
      <Button onPress={() => navigation.navigate('Step2')} />
      </ViewButton>
    </Container>
  );
}
