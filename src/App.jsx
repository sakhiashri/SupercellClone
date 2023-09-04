import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Games from './Page/Games'
import Support from './Page/Support'
import Careers from './Page/careers'
import About from './Page/about'



function App() {
  return(
    <Routes>
      <Route path='/' Component={HomePage}></Route>
      <Route path='/Games' Component={Games}></Route>
      <Route path='/Support' Component={Support}></Route>
      <Route path='/About' Component={About}></Route>
      <Route path='/careers' Component={Careers}></Route>
    </Routes> 
  )



}
export default App