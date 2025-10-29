import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import FruitShop from './components/FruitShop';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Orders from './components/Orders';

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/signup' element={<Signup user={user} setUser={setUser} />} />
        <Route path="/fruit-shop" element={<FruitShop />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />

        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
