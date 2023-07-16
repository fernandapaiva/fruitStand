import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
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
  ErrorMensage
} from "./styles";
import CloseRed from "../../../assets/images/CloseRed";
import Button from "../../../components/Button";

export default function Step1() {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    const isValid = (name)
    setErrorName(!isValid)
    if(isValid) {
      navigation.navigate("Step2");
    }
  }

  return (
    <Container>
      <Separator30 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
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
