import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Aerror from './components/Aerror'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Home from './components/Home'
import All from './components/All'
import Beauty from './components/Beauty'
import Grocery from './components/Grocery'
import Cartitems from './components/Cartitems'

function App() {


  return (
    <div>

<BrowserRouter>
<Header></Header>
<Navbar></Navbar>

<Routes>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
  <Route path='/error' element={<Aerror></Aerror>}></Route>
  <Route path="/products" element={<Products />} />
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/all' element={<All></All>}></Route>
  <Route path='/beauty' element={<Beauty></Beauty>}></Route>
    <Route path='/grocery' element={<Grocery></Grocery>}></Route>
    <Route path='/cartitems' element={<Cartitems></Cartitems>}></Route>
</Routes>

</BrowserRouter>

    </div>
  )
}

export default App