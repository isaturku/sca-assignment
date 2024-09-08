import { ProductCard } from "../components/products-page/product-card"

export const ProductsPage = ({ category }) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-semibold text-4xl capitalize">{category}</h1>
      <div class="grid h-full grid-cols-3 gap-x-8 gap-y-12">
        {Array.from({ length: 5 }, (v, i) => i + 1).map((i) => <ProductCard img="/product1.png" name={`Name ${i}`} price={i * 20.00} />)}
      </div>
    </div>
  )
}
