import React, { useState } from "react";

// libs
import { useNavigation } from "@react-navigation/native";

// styles
import {
  Container,
  InputPhone,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  LiningContent,
  LayoutCurrent,
  ViewButton,
  ErrorMensage,
  Separator15,
} from "./styles";

// icons
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";

// components
import Button from "../../../components/Button";
import ModalCancelRegister from "../../../components/ModalCancelRegister";

// validators
import { phoneMask } from "../../../utils/inputMask";
import { isValidPhone } from "../../../utils/validators";

export default function Step3({ route }) {
  const params = route?.params;

  const navigation = useNavigation();

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);

  const [visible, setVisible] = useState(false);

  const onPress = () => {
    const isValid = isValidPhone(phone);
    setErrorPhone(!isValid);
    if (isValid) {
      navigation.navigate("Step4", { ...params, phone });
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
      <Separator24 />
      <CloseButton onPress={() => setVisible(true)}>
        <CloseRed />
      </CloseButton>
      <Separator24 />
      <LiningContent>
        <LayoutOld>Nome</LayoutOld>
        <Right />
        <LayoutOld>CPF</LayoutOld>
        <Right />
        <LayoutCurrent>Telefone</LayoutCurrent>
      </LiningContent>
      <Separator40 />
      <Label>{"Digite o número de telefone do \ncolaborador"}</Label>
      <Separator15 />
      <InputPhone
        value={phone}
        placeholder="(00) 00000-0000"
        placeholderTextColor={errorPhone ? "#930000" : "#6C7072"}
        onChangeText={(text) => setPhone(phoneMask(text))}
        keyboardType="numeric"
        maxLength={15}
        errorPhone={errorPhone}
      />
      {errorPhone && <ErrorMensage>Insira um telefone válido</ErrorMensage>}
      <ViewButton>
        <Button onPress={() => onPress()} />
      </ViewButton>
    </Container>
  );
}
