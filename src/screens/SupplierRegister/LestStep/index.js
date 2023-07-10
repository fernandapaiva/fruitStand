import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Label,
  CloseButton,
  Separator15,
  ViewButton,
} from "./styles";
import Button from "../../../components/Button";
import Close from "../../../assets/images/CloseRed";

export default function Step3() {

  const navigation = useNavigation();

  return (
    <Container>
      <Separator15 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <Close />
      </CloseButton>
      <Separator15 />
      <Label>Você cadastrou o fornecedor Lorem Ipsum dolor com sucesso</Label>
      <Separator15 />
      <ViewButton>
      <Button onPress={() => navigation.navigate('Supplier')} />
      </ViewButton>
    </Container>
  );
}
