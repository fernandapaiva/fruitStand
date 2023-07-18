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
} from "./styles";

export default function ModalCancelFruit({ visible, setVisible, onPress }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <TitleAlert>Excluir Fruta</TitleAlert>
          <Separator16 />
          <Description>
            Tem certeza que quer excluir essa {"\n"}fruta?
            {"\n"}
            Você perderá todas as informação cadastradas sobre ela.
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
