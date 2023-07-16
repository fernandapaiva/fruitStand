import React, { useState } from "react";

// libs
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

// styles
import {
  Container,
  FirstView,
  PageTitle,
  CloseButton,
  ViewButton,
  Input,
  ViewInput,
  ContentImage,
  Separator16,
  ErrorMensage,
} from "./styles";

//icons
import Close from "../../assets/images/Close";
import Apple from "../../assets/images/Apple";
import Money from "../../assets/images/Money";
import Coins from "../../assets/images/Coins";
import PeopleDark from "../../assets/images/PeopleDark";

// components
import RedButton from "../../components/RedButton";

const DataFruit = [
  {
    label: "Banana",
    value: "Banana",
    key: 0,
  },
  {
    label: "Maça",
    value: "Maça",
    key: 1,
  },
  {
    label: "Laranja",
    value: "Laranja",
    key: 2,
  },
  {
    label: "Abacaxi",
    value: "Abacaxi",
    key: 3,
  },
  {
    label: "Morango",
    value: "Morango",
    key: 4,
  },
  {
    label: "Manga",
    value: "Manga",
    key: 5,
  },
  {
    label: "Uva",
    value: "Uva",
    key: 6,
  },
  {
    label: "Pera",
    value: "Pera",
    key: 7,
  },
  {
    label: "Kiwi",
    value: "Kiwi",
    key: 8,
  },
  {
    label: "Melancia",
    value: "Melancia",
    key: 9,
  },
];

export default function RegisterFruits() {

  const [nameFruit, setNameFruit] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errorFruit, setErrorFruit] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorStock, setErrorStock] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [errorSelectedSupplier, setErrorSelectedSupplier] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    setErrorFruit(!nameFruit);
    setErrorPrice(!price);
    setErrorStock(!stock);
    setErrorSelectedSupplier(!selectedSupplier)
    if (nameFruit && price && stock && selectedSupplier) {
      navigation.navigate("Fruits");
    }
  };

  return (
    <Container>
      <FirstView>
        <PageTitle>Cadastrar Fruta</PageTitle>
        <CloseButton onPress={() => navigation.navigate("Fruits")}>
          <Close />
        </CloseButton>
      </FirstView>
      <ViewInput>
        <ContentImage>
          <Apple error={errorFruit} />
        </ContentImage>
        <Input
          value={nameFruit}
          placeholder="Nome da fruta"
          placeholderTextColor={errorFruit ? "#930000" : "#6C7072"}
          onChangeText={(text) => {
            setErrorFruit(!text);
            setNameFruit(text);
          }}
          errorFruit={errorFruit}
        />
      </ViewInput>
      {errorFruit && <ErrorMensage>Campo obrigatório*</ErrorMensage>}
      <Separator16 />
      <ViewInput>
        <ContentImage>
          <Money error={errorPrice} />
        </ContentImage>
        <Input
          placeholder="Preço do Kilo"
          placeholderTextColor={errorPrice ? "#930000" : "#6C7072"}
          value={price}
          onChangeText={(text) => {
            setErrorPrice(!text);
            setPrice(text);
          }}
          keyboardType="numeric"
          errorPrice={errorPrice}
        />
      </ViewInput>
      {errorPrice && <ErrorMensage>Campo obrigatório*</ErrorMensage>}
      <Separator16 />
      <ViewInput>
        <ContentImage>
          <Coins error={errorStock} />
        </ContentImage>
        <Input
          placeholder="Quantidade no estoque"
          placeholderTextColor={errorStock ? "#930000" : "#6C7072"}
          value={stock}
          onChangeText={(text) => {
            setErrorStock(!text);
            setStock(text);
          }}
          keyboardType="numeric"
          errorStock={errorStock}
        />
      </ViewInput>
      {errorStock && <ErrorMensage>Campo obrigatório*</ErrorMensage>}
      <Separator16 />
      <ViewInput>
      <ContentImage>
          <PeopleDark error={errorSelectedSupplier} />
        </ContentImage>
      <Picker
        key={(DataFruit.map((item) => item.key.toString() || ''))}
        selectedValue={selectedSupplier}
        onValueChange={(itemValue) => setSelectedSupplier(itemValue)}
        style={{
          flex: 1,
          color: errorSelectedSupplier ? "#930000" : "#6C7072",
          marginLeft: -12,
          fontFamily: 'Poppins-Regular'
        }}
      >
        <Picker.Item  label='Fornecedor' value='' style={{fontSize: 15, fontFamily: 'Poppins-Regular'}} />
        {DataFruit.map((item) => (
          <Picker.Item  label={item?.label} value={item?.value} style={{fontSize: 15, fontFamily: 'Poppins-Regular'}} />
        ))}
      </Picker>
      </ViewInput>
      {errorSelectedSupplier && <ErrorMensage>Campo obrigatório*</ErrorMensage>}
      <ViewButton>
        <RedButton
          onPress={() => onPress()}
          title="Cadastrar Fruta"
          Icon={false}
        />
      </ViewButton>
    </Container>
  );
}
