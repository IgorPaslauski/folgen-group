
import React from "react";
import SectionTitle from "./SectionTitle";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre a GrainTech Solutions" 
          subtitle="Há mais de 15 anos desenvolvendo soluções inovadoras para o armazenamento e processamento de grãos."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-sm mb-6 text-grain-blue-600">Nossa História</h3>
            <p className="mb-6 text-gray-700">
              Fundada em 2008, a GrainTech Solutions nasceu do sonho de transformar o setor agrícola 
              brasileiro através de soluções de engenharia de alta performance. Começamos como uma 
              pequena consultoria e hoje somos referência nacional em projetos de armazenagem e 
              logística de grãos.
            </p>
            <p className="mb-6 text-gray-700">
              Nossa equipe multidisciplinar de engenheiros, técnicos e especialistas trabalha 
              incansavelmente para desenvolver projetos que aliam tecnologia, sustentabilidade 
              e eficiência, garantindo o melhor custo-benefício para nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <CheckCircle2 className="text-grain-green-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Missão</h4>
                  <p className="text-gray-700">Oferecer soluções de engenharia inovadoras que maximizem a eficiência do agronegócio.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-grain-green-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Visão</h4>
                  <p className="text-gray-700">Ser líder em soluções tecnológicas para o armazenamento e processamento de grãos na América Latina.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-grain-green-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Valores</h4>
                  <p className="text-gray-700">Inovação, qualidade, responsabilidade ambiental e compromisso com o cliente.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-grain-green-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Equipe</h4>
                  <p className="text-gray-700">Profissionais experientes e altamente qualificados para cada projeto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe GrainTech" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-8">
              <img 
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Instalações GrainTech" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Projeto GrainTech" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-8">
              <img 
                src="https://images.unsplash.com/photo-1543674892-7d64d45facad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Silos GrainTech" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
