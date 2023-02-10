import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import { Addproducts } from './component/Addproduct';
import { Home } from './component/Home';


 
export class App extends Component {
  render() {
    return (
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Addproducts />} path="AddProducts" />


      </Routes>
    )
  }
}
export default App;