import { Link } from "react-router-dom"
import { cn } from "../../utils/cn"

export const NavLink = ({ active, children, path }) => {
  return (
    <Link className="uppercase cursor-pointer flex flex-col gap-4" to={path} data-test-id={active ? "active-category-link" : "category-link"}>
      <span className={cn("px-2 font-semibold", { "text-primary": active })} >{children} </span>
      <div className={cn(`h-1 w-full `, { "bg-primary": active })}>
      </div>
    </Link >
  )

}
