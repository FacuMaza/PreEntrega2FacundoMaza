

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar';



function App() {


  return (

    <>
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
          <Route path='/cart' element={ <Cart />} />
        </Routes>
        
        
       

      </BrowserRouter>

    </>

  )
}

export default App
