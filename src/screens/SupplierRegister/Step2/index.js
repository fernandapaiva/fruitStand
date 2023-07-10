import React from "react";
import {Main, InputName, NameText, Name, ContentInitial, Separator30, Separator15, Cpf, LiningContent, Separator10} from "./styles";

export default function Step2 (){

    return(
        <Main>
            <Separator15 />
            <ContentInitial>
                {/* Botão */}
            </ContentInitial>
            <Separator15 />
            <LiningContent>
            <Name>Nome</Name>
            <Cpf>CPF</Cpf>
            </LiningContent>
            <Separator30 />
            <InputName 
            placeholder="Digite o CPF do colaborador"
            placeholderTextColor="#383b3d"
            />
            <Separator15 />
            <NameText>Mask Cpf</NameText>
        </Main>
    )
}