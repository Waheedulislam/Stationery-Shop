import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl lg:pt-24 pt-32 mx-auto px-6 py-10 bg-gradient-to-r from-teal-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#F06392]">About Us</h2>
        <p className="text-lg text-gray-600 mt-2">
          We provide the best stationery and art supplies to boost your
          creativity.
        </p>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-semibold text-[#F06392]">Our Story</h3>
          <p className="text-lg text-gray-700 mt-4">
            We are passionate about delivering the best stationery products to
            help you create, write, and express yourself. Our journey began with
            the idea of offering quality, affordable products for everyone,
            whether for students, artists, or office professionals. We believe
            that good stationery fuels creativity, and we're here to help you
            find the perfect supplies for all your needs.
          </p>
          <Button className="mt-6 bg-[#F06392] text-white px-6 py-2 rounded-lg hover:bg-[#d44b7d] transition">
            Learn More
          </Button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://t4.ftcdn.net/jpg/09/51/91/59/360_F_951915921_zdZAUXagDYn9JJjqW8XYIPKgywcOx44M.jpg"
            alt="Stationery Collection"
            className="w-80 h-80 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl font-semibold text-[#F06392]">
            High-Quality Products
          </h4>
          <p className="text-gray-600 mt-2">
            We source premium materials to ensure durability and excellent
            performance in every product.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl font-semibold text-[#F06392]">
            Affordable Prices
          </h4>
          <p className="text-gray-600 mt-2">
            Get premium stationery at prices that make it accessible for
            everyone.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl font-semibold text-[#F06392]">
            Fast Delivery
          </h4>
          <p className="text-gray-600 mt-2">
            We ensure your orders reach you quickly and securely, so you never
            run out of supplies.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-teal-500">Get In Touch</h3>
        <p className="text-gray-600 mt-4">
          Have any questions? We'd love to hear from you! Reach out to our
          customer support team.
        </p>
        <Button className="mt-6 bg-[#F06392] text-white px-6 py-2 rounded-lg hover:bg-[#d44b7d] transition">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
