import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Cadastro from './pages/Cadastro';
// import Sobre from "./pages/Sobre";
import Lista from './pages/Lista';
// import Contato from "./pages/Contato";

function Rotas(){
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/lista' element={<Lista/>} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default Rotas
