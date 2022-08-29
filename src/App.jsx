import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import Cadastro from "./pages/cadastro/Cadastro";
import Clientes from "./pages/clientes/Clientes";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuLateral />
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
