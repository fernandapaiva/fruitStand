import React, { useState } from "react";

// libs
import { useNavigation } from "@react-navigation/native";

// styles
import {
  Container,
  InputName,
  Label,
  LayoutOld,
  CloseButton,
  Separator30,
  Separator28,
  ViewButton,
  Separator40,
  Separator15,
  ErrorMensage,
} from "./styles";

// icons
import CloseRed from "../../../assets/images/CloseRed";

// components
import Button from "../../../components/Button";
import ModalCancelRegister from "../../../components/ModalCancelRegister";

export default function Step1() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);

  const [visible, setVisible] = useState(false);

  const onPress = () => {
    const isValid = name;
    setErrorName(!isValid);
    if (isValid) {
      navigation.navigate("Step2", { name });
    }
  };

  const onPressModal = () => {
    setVisible(false);
    navigation.navigate("Supplier");
  };

  return (
    <Container>
      <ModalCancelRegister
        visible={visible}
        setVisible={setVisible}
        onPress={onPressModal}
      />
      <Separator30 />
      <CloseButton onPress={() => setVisible(true)}>
        <CloseRed />
      </CloseButton>
      <Separator28 />
      <LayoutOld>Nome</LayoutOld>
      <Separator40 />
      <Label>Digite o nome do colaborador</Label>
      <Separator15 />
      <InputName
        value={name}
        placeholder="Nome"
        placeholderTextColor={errorName ? "#930000" : "#6C7072"}
        onChangeText={(text) => setName(text)}
        errorName={errorName}
      />
      {errorName && <ErrorMensage>Insira um nome válido</ErrorMensage>}
      <ViewButton>
        <Button onPress={() => onPress()} />
      </ViewButton>
    </Container>
  );
}
