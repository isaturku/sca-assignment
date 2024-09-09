import { Nav } from "./components/nav";
import { NavLink } from "./components/nav/link";
import { cn } from "./utils/cn";
import { ProductsPage } from "./pages/products-page";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductPage from "./pages/product-page";
import { CartPopup } from "./components/cart-popup";


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
        <Nav toggleCartPopupOpen={toggleCartPopupOpen} isCartPopupOpen={isCartPopupOpen}>
          <NavLink active={location.pathname === "/all"} path="/all">All</NavLink>
          <NavLink active={location.pathname === "/clothes"} path="/clothes">Clothes</NavLink>
          <NavLink active={location.pathname === "/tech"} path="/tech">Tech</NavLink>
        </Nav>
      </header >
      <main className="relative px-[8vw] w-full ">
        <CartPopup isOpen={isCartPopupOpen} />
        <div className={cn("z-10  absolute  top-0 left-0 right-0  h-svh transition", { "bg-black/45": isCartPopupOpen })} data-testid="cart-overlay">
        </div>
        <Routes>
          <Route path="/all" element={<ProductsPage category="all" />} />
          <Route path="/clothes" element={<ProductsPage category="clothes" />} />
          <Route path="/tech" element={<ProductsPage category="tech" />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
