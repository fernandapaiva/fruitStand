import React from "react";
import { Modal } from "react-native";
import {
  Container,
  SubContainer,
  ButtonModal,
  SeparatorItens,
  TextModal,
} from "./styles";

import Pencil from "../../assets/images/Pencil";
import Trash from "../../assets/images/Trash";

export default function ModalEdit({
  visible,
  setVisible,
  onPressEdit,
  onPressCancel,
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={{ flex: 1 }}
    >
      <Container>
        <SubContainer>
          <ButtonModal onPress={() => onPressEdit()}>
            <Pencil />
            <TextModal>Editar Fruta</TextModal>
          </ButtonModal>
          <SeparatorItens />
          <ButtonModal onPress={() => onPressCancel()}>
            <Trash />
            <TextModal>Excluir Fruta</TextModal>
          </ButtonModal>
        </SubContainer>
      </Container>
    </Modal>
  );
}
