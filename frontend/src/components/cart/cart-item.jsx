import { gql, useQuery } from "@apollo/client";
import { useCart } from "react-use-cart";

export const CartItem = ({ id, quantity, selectedAttributes }) => {
  const { updateItem, getItem } = useCart()
  const { loading, error, data } = useQuery(gql`
{
  product(id: "${id}") {
    id
    name
    price
    currency
    description
    gallery {
      link
    }
    colors {
      id
      value
      displayValue
    }
    capacities {
      id
      value
      displayValue
    }
    sizes {
      id
      value
      displayValue
    }
  }
}
`);
  console.log(getItem(id))
  return (loading ? <div>Loading</div> :
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex">
        <img
          src={data?.product?.gallery?.[0].link}
          alt={data?.product?.name}
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div>
          <h3 className="font-semibold">{data?.product?.name}</h3>
          <p>{data?.product?.price}{data?.product?.currency}</p>
          {data.product.sizes.length > 0 ? <div className="mt-4">
            <span className="font-semibold">Size:</span>
            <div className="flex space-x-2 mt-2" data-testid="product-attribute-size">
              {data.product?.sizes.map((size) => <button data-testid={`product-attribute-color-${size.id}`}
                key={size.id}
                className={`border rounded-md py-2 px-4 transition  ${selectedAttributes?.selectedSize === size.id ? "bg-black text-white" : ""}`}
              // onClick={() => setSelectedSize(size.id)}
              >
                {size.displayValue}
              </button>
              )}
            </div>
          </div> : <></>}


          {data.product?.capacities.length > 0 ? <div className="mt-4">
            <span className="font-semibold">Capacity:</span>
            <div className="flex space-x-2 mt-2" data-testid="product-attribute-capacity">
              {data.product?.capacities.map((capacity) => <button data-testid={`product-attribute-color-${capacity.id}`}
                key={capacity.id}
                className={`border rounded-md py-2 px-4 transition ${selectedAttributes?.selectedCapacity === capacity.id ? "bg-black text-white" : ""}`}
                onClick={() => updateItem(id, { ...getItem(id), selectedAttributes: { ...getItem(id).selectedAttributes, selectedCapacity: capacity.id } })}
              >
                {capacity.displayValue}
              </button>
              )}
            </div>
          </div> : <></>}

          {data.product?.colors.length > 0 ? <div className="mt-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2 mt-2" data-testid="product-attribute-color">
              {data.product?.colors.map((color) => <button data-testid={`product-attribute-color-${color.id}`}
                key={color.id}
                className={`w-10 h-10  ${selectedAttributes?.selectedColor === color.id ? "ring-2 ring-primary" : ""}`}
                style={{ backgroundColor: color.value }}
              // onClick={() => setSelectedColor(color.id)}
              ></button>
              )}
            </div>
          </div> : <></>}
        </div>
      </div>
      <div className="flex items-center">
        <button className="border rounded-md p-1" onClick={() => updateItem(id, { ...getItem(id), quantity: getItem(id).quantity > 0 ? getItem(id).quantity - 1 : 0 })}>-</button>
        <span className="mx-2" data-testid='cart-item-amount'>{quantity}</span>
        <button className="border rounded-md p-1" onClick={() => updateItem(id, { ...getItem(id), quantity: getItem(id).quantity + 1 })}>+</button>
      </div>
    </div>
  )
}
