import React, { useState, useContext, useEffect } from "react";

// libs
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

// styles
import {
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
import Close from "../../../assets/images/Close";
import Apple from "../../../assets/images/Apple";
import Money from "../../../assets/images/Money";
import Coins from "../../../assets/images/Coins";
import PeopleDark from "../../../assets/images/PeopleDark";

// components
import RedButton from "../../../components/RedButton";

// hooks
import { HooksContext } from "../../../hooks";

export default function RegisterFruits({ onCloseRegister, isEdit }) {
  const navigation = useNavigation();

  const [nameFruit, setNameFruit] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errorFruit, setErrorFruit] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorStock, setErrorStock] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");

  const { RegisterFruit, suppliers, isLoading, updateFruit, fruitId } =
    useContext(HooksContext);

  useEffect(() => {
    if (isEdit) {
      setNameFruit(fruitId.name);
      setPrice(fruitId.price);
      setStock(fruitId.stock);
      setSelectedSupplier(fruitId.supplier);
    }
  }, [fruitId]);

  //Essa constante faz a navegação da tela através da onCloseRegister
  const onRegisterSucess = (fruit) => {
    onCloseRegister();
    navigation.navigate("ResgistrationSuccess", { fruit });
  };

  // Essa função registra uma fruta na lista.
  const onPressRegister = () => {
    setErrorFruit(!nameFruit);
    setErrorPrice(!price);
    setErrorStock(!stock);
    if (nameFruit && price && stock) {
      const data = {
        name: nameFruit,
        price: price,
        stock: stock,
        supplier: selectedSupplier,
      };
      RegisterFruit(data);
      !isLoading && onRegisterSucess(nameFruit);
    }
  };

  // Essa função atualiza item fruta na lista
  const onPressEdit = () => {
    setErrorPrice(!price);
    setErrorStock(!stock);
    if (price && stock) {
      const data = {
        price: price,
        stock: stock,
        supplier: selectedSupplier,
      };
      updateFruit(data, fruitId.id);
      !isLoading && onCloseRegister();
    }
  };

  return (
    <>
      <FirstView>
        <PageTitle>{isEdit ? "Editar Fruta" : "Cadastrar Fruta"}</PageTitle>
        <CloseButton onPress={() => onCloseRegister()}>
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
          editable={!isEdit}
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
          <PeopleDark />
        </ContentImage>
        <Picker
          selectedValue={selectedSupplier}
          onValueChange={(itemValue) => {
            setSelectedSupplier(itemValue);
          }}
          style={{
            flex: 1,
            color:"#6C7072",
            marginLeft: -12,
            fontFamily: "Poppins-Regular",
          }}
        >
          <Picker.Item
            key=""
            label="Fornecedor"
            value=""
            style={{ fontSize: 15, fontFamily: "Poppins-Regular" }}
          />
          {suppliers.map((item) => (
            <Picker.Item
              key={suppliers.map((item) => item.id.toString())}
              label={item?.name}
              value={item?.name}
              style={{ fontSize: 15, fontFamily: "Poppins-Regular" }}
            />
          ))}
        </Picker>
      </ViewInput>
      <ViewButton>
        <RedButton
          onPress={() => {
            isEdit ? onPressEdit() : onPressRegister();
          }}
          title={isEdit ? "Atualizar fruta" : "Cadastrar Fruta"}
          Icon={false}
        />
      </ViewButton>
    </>
  );
}
