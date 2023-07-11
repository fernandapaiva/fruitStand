import React from "react";
import { Modal } from "react-native";
import { Container, SubContainer, ButtonModal, SeparatorItens, TextModal } from "./styles";

import Pencil from "../../assets/images/Pencil";
import Trash from "../../assets/images/Trash";

export default function ModalEdit(visible, setVisible) {
  return (
    <Modal 
    animationType="fade"
    transparent
    visible={visible}
    onRequestClose={() => setVisible(false)}
    >
      <Container>
        <SubContainer>
            <ButtonModal>
          <Pencil />
          <TextModal>Editar Fruta</TextModal>
          </ButtonModal>
          <SeparatorItens />
          <ButtonModal>
          <Trash />
          <TextModal>Excluir Fruta</TextModal>
          </ButtonModal>
        </SubContainer>
      </Container>
    </Modal>
  );
}
