import React, { useContext } from "react";
import CardClientes from "../../components/CardClientes/CardClientes";
import { ClientesContext } from "../../context/ClientesProvider";
import S from "./Clientes.module.css";

const Clientes = () => {
  const { listaCli } = useContext(ClientesContext);

  return (
    <div className={S.divClientes}>
      <h1>Clientes</h1>
      <div className={S.card}>
        {listaCli.length > 0 ? (
          listaCli.map((cliente, index) => {
            return (
              <CardClientes
                key={index}
                nome={cliente.nome}
                sobrenome={cliente.sobrenome}
                email={cliente.email}
                telefone={cliente.telefone}
                enderecoUm={cliente.enderecoUm}
                enderecoDois={cliente.enderecoDois}
                nascimento={cliente.nascimento}
                cpf={cliente.cpf}
                renda={cliente.renda}
              />
            );
          })
        ) : (
          <h3>Nada foi encontrado</h3>
        )}
      </div>
    </div>
  );
};

export default Clientes;
