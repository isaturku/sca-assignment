import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const htmlFrom = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString,
    { USE_PROFILES: { html: true } });
  const html = parse(cleanHtmlString);
  return html;
}

const ProductPage = () => {
  let { id } = useParams()
  const { loading, error, data } = useQuery(gql`query {product(id:"${id}"){
id 
name 
price
currency
description
gallery{
link
}
 #attributes{
#id
#value
#displayValue
#}
}
}`);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();

  return (loading ? <div className="h-svh w-full flex justify-center items-center text-xl">Loading...</div> :
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="flex basis-1/2">
          <div className="flex flex-col p-2 space-y-2 mr-2" data-testid="product-gallery">
            {data.product.gallery.map((p, i) => <button key={p.link} onClick={() => setSelectedImage(i)}><img
              src={p.link}
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg cursor-pointer"
            /> </button>)}

          </div>
          <div className="flex-1">
            <img
              src={data.product.gallery[selectedImage].link}
              alt="Product"
              className="flex-1 rounded-lg"
            />
          </div>
        </div>

        <div className="basis-1/2 pl-8">
          <h1 className="text-3xl font-semibold">{data.product.name}</h1>

          <div className="mt-4">
            <span className="font-semibold">Size:</span>
            <div className="flex space-x-2 mt-2">
              <button
              // key={size}
              // className={`border rounded-md py-2 px-4 ${selectedSize === size ? "bg-black text-white" : ""
              // }`}
              // onClick={() => setSelectedSize(size)}
              >
                ""
              </button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2 mt-2">
              <button
              // key={color}
              // className={`w-10 h-10 rounded-full border ${selectedColor === color ? "ring-2 ring-black" : ""
              // } ${bgColor}`}
              // onClick={() => setSelectedColor(color)}
              ></button>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-4">
            <span className="text-xl font-semibold">{data.product.price}{data.product.currency}</span>
            <button className="bg-green-500 text-white rounded-lg py-2 px-6 ml-4">
              Add to Cart
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-4 text-gray-600" data-testid="product-description">
            {htmlFrom(data.product.description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
