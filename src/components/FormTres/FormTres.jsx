import React, { useContext } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "../FormUm/FormUm.module.css";
import { ClientesContext } from "../../context/ClientesProvider";

const FormTres = () => {
  const { dadosForm, handleChange, handleClick } = useContext(ClientesContext);
  return (
    <div className={S.divForm}>
      <form className={S.form}>
        <Label style={S.label} texto="Data Nascimento:" />
        <Input
          type="date"
          name="data nascimento"
          style={S.input}
          value={dadosForm.nascimento}
          onChange={(e) => handleChange(e, "nascimento")}
        />
        <Label style={S.label} texto="CPF:" />
        <Input
          type="text"
          name="cpf"
          style={S.input}
          value={dadosForm.cpf}
          onChange={(e) => handleChange(e, "cpf")}
        />
        <Label style={S.label} texto="Renda mensal:" />
        <Input
          type="number"
          name="renda mensal"
          style={S.input}
          value={dadosForm.renda}
          onChange={(e) => handleChange(e, "renda")}
        />
      </form>
    </div>
  );
};

export default FormTres;
