import React from 'react'
import FormDois from '../../components/FormDois/FormDois'
import FormTres from '../../components/FormTres/FormTres'
import FormUm from '../../components/FormUm/FormUm'
import S from './Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={S.divCadastro}>
        <FormUm />
        {/* <FormDois /> */}
        {/* <FormTres /> */}
    </div>
  )
}

export default Cadastro