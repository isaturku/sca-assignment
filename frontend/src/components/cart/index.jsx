import { cn } from "../../utils/cn"
import { useCart } from "react-use-cart"
import { CartItem } from "./cart-item"

export const CartPopup = ({ isOpen }) => {
  const { totalItems, items, cartTotal } = useCart()
  return (
    <div
      className={cn("absolute top-0 right-[8vw] z-50  h-fit max-h-[50svh] bg-white shadow-lg transform transition scroll-auto overflow-auto w-fit", { "scale-100": isOpen, " scale-0": !isOpen })}
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold">My Bag, {totalItems} {totalItems > 1 ? "items" : "item"}</h2>
        <div className="mt-4 space-y-6">
          {items.map((i) => <CartItem key={i.id} id={i.id} quantity={i.quantity} />)}
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{cartTotal}$</span>
          </div>
          <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  )
}
