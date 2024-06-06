import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Formulaire from './screens/Formulaire';
import Cv from './screens/Cv';
import { Routes,Route,NavLink} from 'react-router-dom';



function App() {
  return (
    <div className='container mx-auto mt-10 px-4'>
      <header className='mb-5'>
      <nav className='flex justify-end'>
        <NavLink className='mr-3' to='/'> Acceuil</NavLink>
        <NavLink className='mr-3' to='/Formulaire'> Formulaire</NavLink>
        <NavLink className='mr-3' to='/Cv'> Cv</NavLink>
      </nav>
      </header>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Formulaire'element={<Formulaire/>}/>
        <Route path='/Cv'element={<Cv/>}/>
      </Routes>
    </div>
  );
}

export default App;
