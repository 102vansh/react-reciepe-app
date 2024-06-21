import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favourate from './pages/Favourate'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/favourate' element={<Favourate/>}/>
  <Route path='/recipes/:id' element={<Details/>}/>
</Routes>
    </div>
  )
}

export default App