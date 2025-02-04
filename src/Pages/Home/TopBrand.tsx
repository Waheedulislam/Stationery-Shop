import React from "react";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
  },
  {
    id: 3,
    name: "Sony",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF_A3VFu6C1OQ/company-logo_200_200/company-logo_200_200/0/1630554872550/sony_electronics_logo?e=2147483647&v=beta&t=ht3Ql7qkCj6JEWo9F_xXgiFZp3t5PzBQB8f3V0ndD-0",
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 5,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 6,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
];

const TopBrands: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 text-left border-b-2   border-[#F06392] pb-2 mb-8 w-64 ">
        Our Top Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-32 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
