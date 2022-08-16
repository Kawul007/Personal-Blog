import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import SayHi from "./pages/SayHi";
import TechDetails from "./pages/TechDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path='/blogs' exact element={<Blogs/>}/>
        <Route path='/blogsDetails' exact element={<BlogDetails/>}/>
        <Route path='/sayHi' exact element={<SayHi/>}/>
        <Route path='/techDetails' exact element={<TechDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
