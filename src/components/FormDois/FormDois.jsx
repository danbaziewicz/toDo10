import React, { useContext } from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from '../FormUm/FormUm.module.css'
import { ClientesContext } from '../../context/ClientesProvider'

const FormDois = () => {
  const {dadosForm, handleChange, handleClick} = useContext(ClientesContext)
  return (
    <div className={S.divForm}>
      <form className={S.form}>
          <Label style={S.label} texto="CEP:"/>
          <Input type="text" name="cep" style={S.input} value={dadosForm.cep} onChange={(e)=> handleChange(e, 'cep')} />
          <Label style={S.label} texto="Endereço 1:"/>
          <Input type="text" name="endereço" style={S.input} value={dadosForm.enderecoUm} onChange={(e)=> handleChange(e, 'enderecoUm')} />
          <Label style={S.label} texto="Endereço 2:"/>
          <Input type="text" name="endereço" style={S.input} value={dadosForm.enderecoDois} onChange={(e)=> handleChange(e, 'enderecoDois')} />
      </form>
    </div>
  )
}

export default FormDois