import React from "react";

// libs
import { useNavigation } from "@react-navigation/native";

// styles
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

// icons
import Close from "../../../assets/images/Close";
import Register from "../../../assets/images/Register";

// components
import RedButton from "../../../components/RedButton";

export default function LestStep({ route }) {
  const params = route?.params;

  const navigation = useNavigation();

  return (
    <Container>
      <Separator24 />
      <CloseButton onPress={() => navigation.navigate("Supplier")}>
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
          Você cadastrou o fornecedor {params.name} com sucesso!
        </Information>
      </AligningText>
      <ViewButton>
        <RedButton
          onPress={() => navigation.navigate("Supplier")}
          title="Voltar ao início"
          Icon={false}
        />
      </ViewButton>
    </Container>
  );
}
