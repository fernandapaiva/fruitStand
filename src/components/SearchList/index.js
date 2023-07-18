import React, { useContext } from "react";

import { SearchContainer, SearchText } from "./styles";
import Search from "../../assets/images/Search";

import { HooksContext } from "../../hooks";
import { colors } from "../../assets/colors/styles";

const SearchList = ({ isFruit = false, setData }) => {
  const { suppliers, fruits } = useContext(HooksContext);

  const handlerSearch = (text) => {
    const lowerText = text.toLowerCase();
    const newData = isFruit
      ? fruits.filter((item) => item.name.toLowerCase().includes(lowerText))
      : suppliers.filter((item) => item.name.toLowerCase().includes(lowerText));

    setData(newData);
  };

  return (
    <>
      <SearchContainer>
        <Search />
        <SearchText
          placeholder="Pesquisar Fornecedor"
          placeholderTextColor={colors.DarkGray}
          onChangeText={(text) => {
            handlerSearch(text);
          }}
        ></SearchText>
      </SearchContainer>
    </>
  );
};

export default SearchList;
