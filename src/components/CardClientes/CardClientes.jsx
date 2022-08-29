import React from "react";
import S from "./CardClientes.module.css";

const CardClientes = ({
  nome,
  sobrenome,
  email,
  telefone,
  enderecoUm,
  enderecoDois,
  nascimento,
  cpf,
  renda,
}) => {
  return (
    <div className={S.divCard}>
      <h1>
        {nome} {sobrenome}
      </h1>
      <p>
        <b>Email: </b>
        {email}
      </p>
      <p>
        <b>Telefone: </b>
        {telefone}
      </p>
      <p>
        <b>Endereço 1: </b>
        {enderecoUm}
      </p>
      <p>
        <b>Endereço 2: </b>
        {enderecoDois}
      </p>
      <p>
        <b>Data de nascimento: </b>
        {nascimento}
      </p>
      <p>
        <b>CPF: </b>
        {cpf}
      </p>
      <p>
        <b>Renda mensal: </b>
        {renda}
      </p>
    </div>
  );
};

export default CardClientes;
