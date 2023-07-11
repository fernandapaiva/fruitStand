import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputCpf,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  LayoutCurrent,
  LiningContent,
  ViewButton,
} from "./styles";
import Button from "../../../components/Button";
import Right from "../../../assets/images/Right";
import CloseRed from "../../../assets/images/CloseRed";

export default function Step2() {
  const navigation = useNavigation();

  return (
    <Container>
      <Separator24 />
      <CloseButton onPress={() => navigation.navigate("Supplier")}>
        <CloseRed />
      </CloseButton>
      <Separator24 />
      <LiningContent>
        <LayoutOld>Nome</LayoutOld>
        <Right />
        <LayoutCurrent>CPF</LayoutCurrent>
      </LiningContent>
      <Separator40 />
      <Label>Digite o CPF do colaborador</Label>
      <Separator24 />
      <InputCpf placeholder="000.000.000-00" placeholderTextColor="#6C7072" />
      <ViewButton>
        <Button onPress={() => navigation.navigate("Step3")} />
      </ViewButton>
    </Container>
  );
}
