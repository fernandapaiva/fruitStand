import React from "react";
import {Main, InputName, NameText, Name, ContentInitial, Separator30, Separator15, Cpf, LiningContent, Separator10, Phone} from "./styles";

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
            <Phone>Telefone</Phone>
            </LiningContent>
            <Separator30 />
            <InputName 
            placeholder="Digite o número de telefone do colaborador"
            placeholderTextColor="#383b3d"
            />
            <Separator15 />
            <NameText>Mask cel</NameText>
        </Main>
    )
}