import React, { useState } from "react";

// libs
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputCpf,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  LayoutCurrent,
  LiningContent,
  ViewButton,
  ErrorMensage,
  Separator15,
} from "./styles";

// icons
import Right from "../../../assets/images/Right";
import CloseRed from "../../../assets/images/CloseRed";

// components
import Button from "../../../components/Button";
import ModalCancelRegister from "../../../components/ModalCancelRegister";

// validators
import { cpfMask } from "../../../utils/inputMask";
import { checkCPF } from "../../../utils/validators";

export default function Step2({ route }) {
  const params = route?.params;

  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [errorCpf, setErrorCpf] = useState(false);

  const [visible, setVisible] = useState(false);

  const onPress = () => {
    const isValid = checkCPF(cpf);
    setErrorCpf(!isValid);
    if (isValid) {
      navigation.navigate("Step3", { ...params, cpf });
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
        <LayoutCurrent>CPF</LayoutCurrent>
      </LiningContent>
      <Separator40 />
      <Label>Digite o CPF do colaborador</Label>
      <Separator15 />
      <InputCpf
        value={cpf}
        placeholder="000.000.000-00"
        placeholderTextColor={errorCpf ? "#930000" : "#6C7072"}
        onChangeText={(text) => setCpf(cpfMask(text))}
        keyboardType="numeric"
        maxLength={14}
        errorCpf={errorCpf}
      />
      {errorCpf && <ErrorMensage>Insira um CPF válido</ErrorMensage>}
      <ViewButton>
        <Button onPress={() => onPress()} />
      </ViewButton>
    </Container>
  );
}
