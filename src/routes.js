import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from'./pages/Home'
import Filme from './pages/Filme'
import Header from './components/Header'
import Favoritos from './pages/Favorito'
import Erro from './pages/Erro'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Filme/:id' element={<Filme/>}/>
            <Route path='/favorito' element={<Favoritos/>}/>

            <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;