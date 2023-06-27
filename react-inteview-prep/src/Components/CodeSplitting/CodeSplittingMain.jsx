import React from 'react'
import { Route, BrowserRouter, Routes, Link, Outlet } from "react-router-dom";
import Home from "./Home"
import Store from "./Store"
import About from "./About"

function CodeSplittingMain() {
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<NavWrapper />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function NavWrapper(){
    return (
        <>
            <nav style={{display: "flex", justifyContent: 'center',gap: "1rem"}}>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/about">About</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default CodeSplittingMain