import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MenuLateral from './components/MenuLateral/MenuLateral'
import Cadastro from './pages/cadastro/Cadastro'

function App() {


  return (
    <div>
    <BrowserRouter>
    <MenuLateral/>
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
