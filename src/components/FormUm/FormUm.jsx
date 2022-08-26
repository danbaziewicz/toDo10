import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from './FormUm.module.css'

const FormUm = () => {
  return (
    <div className={S.divForm}>

    <form className={S.form}>
        <Label style={S.label} texto="Nome:"/>
        <Input type="text" name="nome" style={S.input} />
        <Label style={S.label} texto="Sobrenome:"/>
        <Input type="text" name="sobrenome" style={S.input} />
        <Label style={S.label} texto="E-mail:"/>
        <Input type="email" name="email" style={S.input} />
        <Label style={S.label} texto="Telefone:"/>
        <Input type="tel" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" name="tel" style={S.input} />
    </form>
    </div>
  )
}

export default FormUm