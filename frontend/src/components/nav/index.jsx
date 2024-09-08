import { ReactComponent as Logo } from "../../logo.svg"
import { ReactComponent as Cart } from "../../cart.svg"
import { CartPopup } from "../cart-popup"

export const Nav = ({ children, toggleCartPopupOpen }) => {
  return (
    <nav className="flex justify-between py-4 px-[8vw]">
      <ul className="flex gap-4">
        {children}
      </ul>
      <Logo />
      <button onClick={toggleCartPopupOpen} className="relative">
        <Cart />
        <CartPopup isOpen={false} />
      </button>
    </nav>
  )
}


