import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from '../FormUm/FormUm.module.css'

const FormDois = () => {
  return (
    <div className={S.divForm}>
      <form className={S.form}>
          <Label style={S.label} texto="CEP:"/>
          <Input type="text" name="cep" style={S.input} />
          <Label style={S.label} texto="Endereço 1:"/>
          <Input type="text" name="endereço" style={S.input} />
          <Label style={S.label} texto="Endereço 2:"/>
          <Input type="text" name="endereço" style={S.input} />
      </form>
    </div>
  )
}

export default FormDois