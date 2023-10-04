import React from 'react'
import Home from './Components/Home'
import Register from './Components/Register'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

export default function App(){

  return(
    <>
      <BrowserRouter>
                <Routes>
                        <Route exact path="/" Component={Home}></Route>
                        <Route exact path="/register" Component={Register}></Route>
                </Routes>
            </BrowserRouter>
    </>
  );
}