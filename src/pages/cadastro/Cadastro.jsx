import React, { useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import FormDois from '../../components/FormDois/FormDois'
import FormTres from '../../components/FormTres/FormTres'
import FormUm from '../../components/FormUm/FormUm'
import { ClientesContext } from '../../context/ClientesProvider'
import Home from '../Home/Home'
import S from './Cadastro.module.css'

const Cadastro = () => {

  const {handleClick, view} = useContext(ClientesContext)

  return (
    <div className={S.divCadastro}>
        <h1>CADASTRO DE CLIENTES</h1>
        {view == 'form1' && <FormUm />}
        {view == 'form2' && <FormDois />}
        {view == 'form3' && <FormTres />}
        <Button onClick={handleClick} style={S.btn} txtBtn={'Enviar'} />
    </div>
  )
}

export default Cadastro