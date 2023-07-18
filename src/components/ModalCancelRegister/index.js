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

export default function ModalCancelRegister({ visible, setVisible, onPress }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <TitleAlert>Cancelar Cadastro</TitleAlert>
          <Separator5 />
          <Description>
            Tem certeza que quer cancelar o cadastro do colaborador?
            {"\n"}
            Você perderá todas as informação inseridas até aqui
          </Description>
          <Separator16 />
          <AlertButtons>
            <Button onPress={() => setVisible(false)}>
              <TitleAlertRed>Não</TitleAlertRed>
            </Button>
            <ButtonRed onPress={() => onPress()}>
              <TitleAlerWhite>Sim, cancelar</TitleAlerWhite>
            </ButtonRed>
          </AlertButtons>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
