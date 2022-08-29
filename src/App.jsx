import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MenuLateral from './components/MenuLateral/MenuLateral'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/Home/Home'

function App() {


  return (
    <div>
    <BrowserRouter>
    <MenuLateral/>
    {/* HEADER */}
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    {/* FOOTER */}
    </BrowserRouter>
    </div>
  )
}

export default App
