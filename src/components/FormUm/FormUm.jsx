import React, { useContext } from 'react'
import { ClientesContext } from '../../context/ClientesProvider'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from './FormUm.module.css'

const FormUm = () => {
  const {dadosForm, handleChange, handleClick} = useContext(ClientesContext)

  return (
    <div className={S.divForm}>

    <form className={S.form}>
        <Label style={S.label} texto="Nome:"/>
        <Input type="text" name="nome" style={S.input} value={dadosForm.nome} onChange={(e)=> handleChange(e, 'nome')} />
        <Label style={S.label} texto="Sobrenome:"/>
        <Input type="text" name="sobrenome" style={S.input} value={dadosForm.sobrenome} onChange={(e)=> handleChange(e, 'sobrenome')} />
        <Label style={S.label} texto="E-mail:"/>
        <Input type="email" name="email" style={S.input} value={dadosForm.email} onChange={(e)=> handleChange(e, 'email')} />
        <Label style={S.label} texto="Telefone:"/>
        <Input type="tel" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" name="tel" style={S.input} value={dadosForm.telefone} onChange={(e)=> handleChange(e, 'telefone')} />
    </form>
    </div>
  )
}

export default FormUm