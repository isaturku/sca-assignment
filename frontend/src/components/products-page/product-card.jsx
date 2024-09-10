import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { ReactComponent as Cart } from "../../cart.svg"

export const ProductCard = ({ id, img, name, price, currency }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className={cn("flex flex-col h-[45svh] p-2 gap-2 group hover:shadow-[#A8ACB030] hover:shadow-md cursor-pointer")} data-testid={`product-${name.toLowerCase().replaceAll(" ", "-")}`}>
        <div className="relative basis-3/4 h-3/4 object-cover">
          <img src={img} className="h-full w-full object-cover object-top" />
          <button className="absolute rounded-full bg-primary bottom-0 translate-y-1/2 right-4 p-4 hidden group-hover:block stroke-white fill-white hover:bg-primary/75" onClick={() => { console.log("sdaf") }}>
            <Cart />
          </button>
        </div>
        <span className="font-thin">{name}</span>
        <span className="font-semibold">{price}{currency}</span>
      </div>
    </Link >
  )
}
