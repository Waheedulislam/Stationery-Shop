import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-screen-xl lg:pt-24 pt-32 mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#F06392]">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-2">
          Have any questions? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#F06392]">Contact Us</h3>
          <p className="text-gray-600 mt-2">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06392]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06392]"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06392]"
            ></textarea>
            <Button className="w-full bg-[#F06392] text-white py-3 rounded-lg hover:bg-[#d44b7d] transition">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 p-6 bg-[#F5F5F5] rounded-lg shadow-md">
            <MapPin className="text-[#F06392] w-10 h-10" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Our Address
              </h4>
              <p className="text-gray-600">
                123 Stationery St, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-[#F5F5F5] rounded-lg shadow-md">
            <Phone className="text-[#64B5F6] w-10 h-10" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-[#F5F5F5] rounded-lg shadow-md">
            <Mail className="text-[#FFA726] w-10 h-10" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Email Us</h4>
              <p className="text-gray-600">contact@stationeryshop.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map (Placeholder) */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-teal-500 text-center">
          Find Us on the Map
        </h3>
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=Dhaka,Bangladesh&key=YOUR_GOOGLE_MAPS_API_KEY"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
