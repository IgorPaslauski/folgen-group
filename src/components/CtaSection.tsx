
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="orcamento" className="py-16 bg-folgen-primary">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-folgen-primary to-folgen-secondary rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="heading-lg text-white mb-6">
                Pronto para otimizar sua operação agroindustrial?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Entre em contato conosco hoje mesmo e descubra como nossas soluções de engenharia 
                podem transformar sua produtividade e eficiência operacional.
              </p>
              
              <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-white text-folgen-primary hover:bg-gray-100"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({behavior: "smooth"})}
                >
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full md:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-folgen-primary"
                >
                  Agendar Reunião
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
                alt="Engenharia agroindustrial" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-folgen-primary/80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
