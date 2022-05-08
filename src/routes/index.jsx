import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Hotel from '../pages/Hotel/Hotel';
import List from '../pages/List/List';
 const RoutesRoot=()=> {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
    </Routes>
  )
}
export default RoutesRoot;