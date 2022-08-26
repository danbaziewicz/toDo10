import React from 'react'
import { Link } from 'react-router-dom'
import S from './MenuLateral.module.css'

const MenuLateral = () => {
  return (
    <div className={S.menuLateral}>
        <div>
            <nav>
                <Link className={S.link} to={"/"}>Home</Link>
                <Link className={S.link} to={"/cadastro"}>Cadastro</Link>
                <Link className={S.link} to={"/clientes"}>Clientes</Link>
            </nav>
        </div>
        
    </div>
  )
}

export default MenuLateral