import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../src/pages/Home";
import Cadastro from '../src/pages/Cadastro';
import Lista from '../src/pages/Lista';

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
