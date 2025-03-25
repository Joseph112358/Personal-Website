import React, {useEffect, useState} from 'react'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<Post />} /> {/* Dynamic route */}
     </Routes>
  </BrowserRouter>
  );
}

export default App;
