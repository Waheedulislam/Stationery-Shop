import { Button } from "@/components/ui/button";

export default function StoreLanding() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-[#F06392] text-3xl mt-8 mb-4 font-semibold">
          Our Story!!
        </h3>
        <h1 className=" text-5xl  font-bold  mb-10">Welcome To Store.</h1>
        <p className="text-gray-600 mt-8 ">
          A stationery business is an ideal way to showcase your talent while
          offering attractive products for everyone to enjoy. Selling your
          unique designs on greeting cards, brochures, business cards,
          letterhead, and other paper products is a straightforward and fun way
          to make a profit.
        </p>
        <Button className="mt-6  text-xl bg-[#F06392] text-white px-8 py-6  lg:mt-10 rounded-lg hover:bg-[#d44b7d] transition">
          Read More
        </Button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex  gap-3 justify-center md:justify-end mt-10 md:mt-0">
        {/* First Image */}
        <div className="p-2 rounded-lg shadow-md">
          <img
            src="https://demo.codezeel.com/opencart/OPC06/OPC060148/image/catalog/aboutcms1.jpg"
            alt="Brush Markers"
            className="w-60 h-full object-cover rounded-lg md:w-80 "
          />
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 gap-6 ">
          {/* Second Image */}
          <div className="p-2 rounded-lg shadow-md">
            <img
              src="https://demo.codezeel.com/opencart/OPC06/OPC060148/image/catalog/aboutcms2.jpg"
              alt="Poster Colors"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Third Image */}
          <div className="p-2 rounded-lg shadow-md">
            <img
              src="https://demo.codezeel.com/opencart/OPC06/OPC060148/image/catalog/aboutcms3.jpg"
              alt="Notebooks"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
