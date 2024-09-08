import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { ReactComponent as Cart } from "../../cart.svg"

export const ProductCard = ({ id, img, name, price }) => {
  return (
    <Link to={`/products/${id}`} className={cn("flex flex-col p-2 gap-2 group hover:shadow-[#A8ACB030] hover:shadow-product")}>
      <div className="relative">
        <img src={img} />
        <button className="absolute rounded-full bg-primary bottom-0 translate-y-1/2 right-4 p-4 hidden group-hover:block stroke-white fill-white">
          <Cart />
        </button>
      </div>
      <span className="font-thin">{name}</span>
      <span className="font-semibold">{price}$</span>
    </Link>
  )
}
