import React, { createContext, useState} from "react";

export const ClientesContext = createContext()

const ClientesProvider = ({children}) => {

    const [dadosForm, setDadosForm] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        cep: '',
        enderecoUm: '',
        enderecoDois: '',
        nascimento: '',
        cpf: '',
        renda: ''
    })
    
    const [dados, setDados] = useState({})
    const [listaCli, setListaCli] = useState([])

    function handleChange (e, chave) {
        setDadosForm({...dadosForm, [chave]:e.target.value})
    }

    const [view, setView] = useState('form1')

    function handleNextForm() {
        console.log('entrou')
        if(view == 'form1'){
          setView('form2')
        }
    
        if(view == 'form2') {
          setView('form3')
        }
      }
        
    function handleClick(e) {
        e.preventDefault()
        setDados({...dados, dadosForm})
        // console.log(dados)
        if(view == 'form1'){
            handleNextForm()
        } else if(view == 'form2') {
            handleNextForm()
        } else if(view == 'form3') {
            handleFinaliza()
            setDadosForm({
                nome: '',
                sobrenome: '',
                email: '',
                telefone: '',
                cep: '',
                enderecoUm: '',
                enderecoDois: '',
                nascimento: '',
                cpf: '',
                renda: ''
            })
            setView('form1')
        } 
        // console.log(dados)
    }

    function handleFinaliza() {
        setDados({...dados, dadosForm})
        setListaCli([...listaCli, dados])
        console.log(dados)
        console.log(dadosForm)
    }

    const contexto = {
        dadosForm: dadosForm,
        listaCli: listaCli,
        handleChange: handleChange,
        handleClick: handleClick,
        view: view
    }

    return(
        <ClientesContext.Provider value={contexto}>
            {children}
        </ClientesContext.Provider>
    )

}

export default ClientesProvider