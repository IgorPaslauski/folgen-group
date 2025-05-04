import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function CarouselTop() {
  const five_seconds = 5000; // 5 seconds
  return (
    <>
      <Carousel
        className="absolute inset-0 bg-cover bg-center z-0"
        plugins={[
          Autoplay({
            delay: five_seconds,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center h-screen">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center h-screen">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center h-screen">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 z-10" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </Carousel>
    </>
  );
}
