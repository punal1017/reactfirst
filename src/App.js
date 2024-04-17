import React from 'react'
import{Routes,Route} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'

import Product from './component/Product';
const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    </Routes>
    
    </div>
  )
}

export default App