import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './user'
import Admin from './admin'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import TestLayout from '../testlayout'

let type = localStorage.getItem("type");

const Router = () => {
  const type = localStorage.getItem('type')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          !type ? <Login></Login> : (type === "user" ? <User></User> : <Admin></Admin>)
        } />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router