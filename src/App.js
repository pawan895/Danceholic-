import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home'
import Levels from './Pages/Levels';
import Level1 from './Pages/Level1'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NavBar from './Components/NavBar'

function App() {
  return (
    <Router>
       <NavBar />   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/level/:id' element={<Level1 />} />
        <Route path='/levels' element={<Levels />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App