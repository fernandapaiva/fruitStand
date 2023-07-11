import React from "react";
// import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Separator24,
  Separator40,
  SubContainer,
  CloseButton,
  ViewButton,
  Description,
  Information,
  Separator16,
  AligningText,
} from "./styles";
import Close from "../../../assets/images/Close";
import Register from "../../../assets/images/Register";
import RedButton from "../../../components/RedButton";

export default function LestStep() {
  return (
    <Container>
      <Separator24 />
      <CloseButton>
        <Close />
      </CloseButton>
      <Separator40 />
      <SubContainer>
        <Register />
      </SubContainer>
      <AligningText>
        <Description>Fornecedor cadastrado</Description>
        <Separator16 />
        <Information>
          {"Você cadastrou o fornecedor Lorem\nIpsum dolor com sucesso!"}
        </Information>
      </AligningText>
      <ViewButton>
        <RedButton />
      </ViewButton>
    </Container>
  );
}
