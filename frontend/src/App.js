import { Nav } from "./components/nav";
import { NavLink } from "./components/nav/link";
import { cn } from "./utils/cn";
import { ProductsPage } from "./pages/products-page";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductPage from "./pages/product-page";


const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isCartPopupOpen, setCartPopupOpen] = useState(false)
  const toggleCartPopupOpen = () => {
    setCartPopupOpen((prev) => !prev)
  }
  return (
    <>
      <header>
        <Nav toggleCartPopupOpen={toggleCartPopupOpen}>
          <NavLink active={location.pathname === "/"} path="/">All</NavLink>
          <NavLink active={location.pathname === "/clothes"} path="/clothes">Clothes</NavLink>
          <NavLink active={location.pathname === "/tech"} path="/tech">Tech</NavLink>
        </Nav>
      </header >
      <main className={cn("relative px-[8vw] w-full after:z-10 after:hidden after:absolute  after:top-0 after:left-0 after:right-0 after:bg-black/45 after:h-svh", { "after:block": isCartPopupOpen })}>
        <Routes>
          <Route path="/" element={<ProductsPage category="all" />} />
          <Route path="/clothes" element={<ProductsPage category="clothes" />} />
          <Route path="/tech" element={<ProductsPage category="tech" />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
