import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Banner = () => {
  const images = [
    "https://demo.codezeel.com/opencart/OPC06/OPC060148/image/cache/catalog/main-banner-2-1903x750.jpg",
    "https://demo.codezeel.com/opencart/OPC06/OPC060148/image/cache/catalog/main-banner-1-1903x750.jpg",
    "https://ap-bookory.myshopify.com/cdn/shop/files/01_01_1.png?v=1688201302&width=3000",
  ];

  return (
    <div className="w-full mx-auto pt-32 lg:pt-20">
      <Carousel className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition" />
      </Carousel>
    </div>
  );
};

export default Banner;
