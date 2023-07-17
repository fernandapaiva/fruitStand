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

export default function ModalCancelFruit(visible, setVisible, onPress) {
  return (
    <Modal 
    animationType="fade" 
    transparent
    visible={visible}
    onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <ContainerSeparator>
            <TitleAlert>Cancelar Cadastro</TitleAlert>
            <Separator16 />
            <Description>
              Tem certeza que quer excluir essa fruta? Você perderá todas as
              informação cadastradas sobre ela.
            </Description>
          </ContainerSeparator>
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
