import React from "react";
import {Button, TitleButton} from "./styles";

export default function RedButton (){
    return(
        <Button activeOpacity={0.7} >
            <TitleButton>Cadastrar Fornecedor</TitleButton>
        </Button>
    )
}