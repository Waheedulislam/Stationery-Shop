import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-[#F06392]">
            ${product.price}
          </span>
          <button className="bg-[#F06392] text-white px-4 py-2 rounded-md hover:bg-[#d44b7d] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
