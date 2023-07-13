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

export default function ModalCancelFruit() {
  return (
    <Modal animationType="fade" transparent>
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
            <Button>
              <TitleAlertRed>Não</TitleAlertRed>
            </Button>
            <ButtonRed>
              <TitleAlerWhite>Sim, Excluir</TitleAlerWhite>
            </ButtonRed>
          </AlertButtons>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
