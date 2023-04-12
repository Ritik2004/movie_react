import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Watchlist from "./components/Watchlist.js"
import Add from './components/Add'
import Header from './components/Header'
import Watched from './components/Watched'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
   <Router>
   <Header />
    <Routes>
      <Route path='/' element={<Watchlist />}/>
      <Route path='/watched' element={<Watched />}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
   </Router>  
   </GlobalProvider>
  )
}

export default App;
