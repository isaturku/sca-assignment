import { useEffect } from "react";
import { ProductCard } from "../components/products-page/product-card"
import { useQuery, gql } from '@apollo/client';

export const ProductsPage = ({ category }) => {
  const { loading, error, data } = useQuery(gql`query {products{
id 
name 
description
price
}
}`);
  useEffect(() => console.log(data), [data])
  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-semibold text-4xl capitalize">{category}</h1>
      {loading ? <div className="mx-auto my-auto text-xl">Loading...</div> : <div className="grid h-full grid-cols-3 gap-x-8 gap-y-12">
        {data.products.map(p => <ProductCard key={p.id} name={p.name} price={p.price} />)}
      </div>}
    </div>
  )
}
