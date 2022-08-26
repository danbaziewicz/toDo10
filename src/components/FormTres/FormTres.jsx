import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from '../FormUm/FormUm.module.css'

const FormTres = () => {
  return (
    <div className={S.divForm}>
      <form className={S.form}>
          <Label style={S.label} texto="Data Nascimento:"/>
          <Input type="date" name="data nascimento" style={S.input} />
          <Label style={S.label} texto="CPF:"/>
          <Input type="text" name="cpf" style={S.input} />
          <Label style={S.label} texto="Renda mensal:"/>
          <Input type="number" name="renda mensal" style={S.input} />
      </form>
    </div>
  )
}

export default FormTres