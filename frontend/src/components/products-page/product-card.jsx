import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { ReactComponent as Cart } from "../../cart.svg"
import { useCart } from "react-use-cart";
import { useCartOverLayContext } from '../../state/CartOverlay'

export const ProductCard = ({ id, img, name, price, currency }) => {
  const { addItem } = useCart()
  const { setIsCartOpen } = useCartOverLayContext()
  return (
    <Link to={`/products/${id}`}>
      <div className={cn("flex flex-col h-[45svh] p-2 gap-2 group hover:shadow-[#A8ACB030] hover:shadow-md cursor-pointer")} data-testid={`product-${name.toLowerCase().replaceAll(" ", "-")}`}>
        <div className="relative basis-3/4 h-3/4 object-cover">
          <img src={img} className="h-full w-full object-cover object-top" />
          <button
            className="absolute rounded-full bg-primary bottom-0 translate-y-1/2 right-4 p-4 hidden group-hover:block stroke-white fill-white hover:bg-primary/75 z-50"
            onClick={(e) => {
              e.preventDefault();
              addItem({ id, price });
              setIsCartOpen(true);
            }}>
            <Cart />
          </button>
        </div>
        <span className="font-thin">{name}</span>
        <span className="font-semibold">{price}{currency}</span>
      </div>
    </Link >
  )
}
