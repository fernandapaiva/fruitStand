import React from "react";
import { Modal } from "react-native";
import {
  Container,
  ContainerInside,
  ContainerSeparator,
  TitleAlert,
  Description,
  Separator16,
  AlertButtons,
  Button,
  ButtonRed,
  TitleAlerWhite,
  TitleAlertRed,
} from "./styles";

export default function ModalCancelRegister({visible, setVisible, onPress}) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={() => setVisible(false)}>
      <Container>
        <ContainerInside>
          <ContainerSeparator>
            <TitleAlert>Cancelar Cadastro</TitleAlert>
            <Separator16 />
            <Description>
              Tem certeza que quer cancelar o cadastro do colaborador? Você
              perderá todas as informações inseridas até aqui
            </Description>
          </ContainerSeparator>
          <AlertButtons>
            <Button>
              <TitleAlertRed>Não</TitleAlertRed>
            </Button>
            <ButtonRed>
              <TitleAlerWhite>Sim, cancelar</TitleAlerWhite>
            </ButtonRed>
          </AlertButtons>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
