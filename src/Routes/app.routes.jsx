import { Routes, Route } from 'react-router-dom';
//Pages
import { NewNotes } from '../pages/NewNotes'
import { MyFilmsDetails } from '../pages/DetailFilms'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MyFilms } from '../pages/MyFilms';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newnotes" element={<NewNotes />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myfilms" element={<MyFilms/>} />
      <Route path="/detailfilms/:id" element={<MyFilmsDetails />} />
    </Routes>
  )
}