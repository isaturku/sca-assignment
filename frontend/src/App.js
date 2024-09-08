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
  useEffect(() => navigate("/all"), [])
  const toggleCartPopupOpen = () => {
    setCartPopupOpen((prev) => !prev)
  }
  return (
    <>
      <header>
        <Nav toggleCartPopupOpen={toggleCartPopupOpen}>
          <NavLink active={location.pathname === "/all"} path="/all">All</NavLink>
          <NavLink active={location.pathname === "/clothes"} path="/clothes">Clothes</NavLink>
          <NavLink active={location.pathname === "/tech"} path="/tech">Tech</NavLink>
        </Nav>
      </header >
      <main className="relative px-[8vw] w-full ">
        <div className={cn("z-10 hidden absolute  top-0 left-0 right-0 bg-black/45 h-svh", { "block": isCartPopupOpen })} data-testid="cart-overlay">
          <Routes>
            <Route path="/all" element={<ProductsPage category="all" />} />
            <Route path="/clothes" element={<ProductsPage category="clothes" />} />
            <Route path="/tech" element={<ProductsPage category="tech" />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
