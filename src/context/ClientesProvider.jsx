import React, { createContext, useState } from "react";

export const ClientesContext = createContext();

const ClientesProvider = ({ children }) => {
  const [dadosForm, setDadosForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    enderecoUm: "",
    enderecoDois: "",
    nascimento: "",
    cpf: "",
    renda: "",
  });

  const [listaCli, setListaCli] = useState([]);

  function handleChange(e, chave) {
    setDadosForm({ ...dadosForm, [chave]: e.target.value });
  }

  const [view, setView] = useState("form1");

  function handleNextForm() {
    if (view == "form1") {
      setView("form2");
    }

    if (view == "form2") {
      setView("form3");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    if (view == "form1") {
      handleNextForm();
    } else if (view == "form2") {
      handleNextForm();
    } else if (view == "form3") {
      handleFinaliza();
      setDadosForm({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        cep: "",
        enderecoUm: "",
        enderecoDois: "",
        nascimento: "",
        cpf: "",
        renda: "",
      });
      alert(
        `Cliente ${dadosForm.nome} ${dadosForm.sobrenome} cadastrado com sucessso`
      );
      setView("form1");
    }
  }

  function handleFinaliza() {
    setListaCli([...listaCli, dadosForm]);
  }

  const contexto = {
    dadosForm: dadosForm,
    listaCli: listaCli,
    handleChange: handleChange,
    handleClick: handleClick,
    view: view,
  };

  return (
    <ClientesContext.Provider value={contexto}>
      {children}
    </ClientesContext.Provider>
  );
};

export default ClientesProvider;
