
import React from "react";
import SectionTitle from "./SectionTitle";
import { Building, Factory, Package, Warehouse } from "lucide-react";

const services = [
  {
    icon: <Building size={48} className="text-grain-blue-600 mb-4" />,
    title: "Projetos de Engenharia",
    description: "Desenvolvimento de projetos personalizados para armazenagem e processamento de grãos, com foco em eficiência energética e otimização de espaço."
  },
  {
    icon: <Warehouse size={48} className="text-grain-blue-600 mb-4" />,
    title: "Construção de Silos",
    description: "Execução de obras para silos metálicos e de concreto, com tecnologia de ponta e materiais de alta durabilidade para garantir a qualidade do seu investimento."
  },
  {
    icon: <Factory size={48} className="text-grain-blue-600 mb-4" />,
    title: "Automação Industrial",
    description: "Sistemas automatizados para controle de temperatura, umidade e aeração, garantindo a conservação adequada dos grãos e reduzindo custos operacionais."
  },
  {
    icon: <Package size={48} className="text-grain-blue-600 mb-4" />,
    title: "Logística de Grãos",
    description: "Planejamento e implementação de sistemas logísticos integrados, desde o recebimento até a expedição, otimizando o fluxo e reduzindo perdas."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Soluções completas em engenharia para o armazenamento e processamento de grãos."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service flex flex-col items-center text-center">
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Services Info */}
        <div className="mt-16 bg-grain-blue-600 text-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-6">Por que escolher nossos serviços?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-grain-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Equipe multidisciplinar com mais de 50 engenheiros especializados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-grain-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Tecnologia de ponta para monitoramento remoto e em tempo real</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-grain-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Soluções personalizadas de acordo com as necessidades específicas de cada cliente</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-grain-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Compromisso com sustentabilidade e eficiência energética em todos os projetos</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Engenharia GrainTech" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-grain-green-500 p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">+200</p>
                <p className="text-sm">Projetos Concluídos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
