import { Routes, Route } from 'react-router-dom';
//Pages
import { SingIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/" element={<SingIn/>} />
      <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}