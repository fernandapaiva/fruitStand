import React from "react";
import { Modal } from "react-native";
import {
  Container,
  ContainerInside,
  TitleAlert,
  Description,
  Separator16,
  AlertButtons,
  Button,
  ButtonRed,
  TitleAlerWhite,
  TitleAlertRed,
  Separator5,
} from "./styles";

export default function ModalCancelSupplier({ visible, setVisible, onPress }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <TitleAlert>Excluir Fornecedor</TitleAlert>
          <Separator5 />
          <Description>
            Tem certeza que quer excluir esse {"\n"}fornecedor?
            {"\n"}
            Você perderá todas as informação cadastradas sobre ele.
          </Description>
          <Separator16 />
          <AlertButtons>
            <Button onPress={() => setVisible(false)}>
              <TitleAlertRed>Não</TitleAlertRed>
            </Button>
            <ButtonRed onPress={() => onPress()}>
              <TitleAlerWhite>Sim, Excluir</TitleAlerWhite>
            </ButtonRed>
          </AlertButtons>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
