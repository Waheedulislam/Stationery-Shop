import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";

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
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      whileHover={{ scale: 1.05 }} // Framer Motion handles scaling on hover
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white mb-20 shadow-lg rounded-xl overflow-hidden"
    >
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
    </motion.div>
  );
};

export default ProductCard;
