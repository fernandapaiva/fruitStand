import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
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
} from "./styles";

//Icons
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";

//Components
import Button from "../../../components/Button";

//Pages
import { phoneMask } from "../../../utils/inputMask";
import { isValidPhone } from "../../../utils/validators";

export default function Step3() {
  const [phone, setPhone] = useState("");
  const [errorPhone, serErrorPhone] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <Separator24 />
      <CloseButton onPress={() => navigation.navigate("Supplier")}>
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
      <Separator24 />
      <InputPhone
        value={phone}
        placeholder="(00) 00000-0000"
        placeholderTextColor="#6C7072"
        onChangeText={(text) => setPhone(phoneMask(text))}
        keyboardType="numeric"
      />
      <ViewButton>
        <Button onPress={() => navigation.navigate("Step4")} />
      </ViewButton>
    </Container>
  );
}
