import { Button } from "@/components/ui/button";
import CarouselTop from "./CarouseTop";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <CarouselTop />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="heading-xl mb-6 animate-fade-in text-white">
            <span className="text-folgen-primary">Folgen</span>{" "}
            <span className="text-folgen-secondary">Group</span> Estratégias que
            geram <span className="text-folgen-primary">evolução</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-in text-gray-200">
            Especialistas em projetos de silos, armazenagem de grãos e sistemas
            logísticos com tecnologia de ponta para maximizar sua produtividade.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-folgen-primary hover:bg-folgen-secondary animate-fade-in"
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conheça Nossos Serviços
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-folgen-primary animate-fade-in"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
