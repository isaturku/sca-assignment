import { useEffect } from "react";
import { ProductCard } from "../components/products-page/product-card"
import { useQuery, gql } from '@apollo/client';

export const ProductsPage = ({ category }) => {
  const { loading, error, data } = useQuery(gql`
    query products{
id
name
description
    }
`)
  useEffect(() => console.log(data), [data])
  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-semibold text-4xl capitalize">{category}</h1>
      <div className="grid h-full grid-cols-3 gap-x-8 gap-y-12">
        {Array.from({ length: 5 }, (v, i) => i + 1).map((i) => <ProductCard key={i} img="/product1.png" name={`Name ${i}`} price={i * 20.00} />)}
      </div>
    </div>
  )
}
