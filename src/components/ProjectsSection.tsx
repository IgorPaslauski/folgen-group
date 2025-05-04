
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Complexo de Silos em Sorriso - MT",
    category: "Armazenagem",
    description: "Projeto e construção de um complexo com capacidade para 100.000 toneladas de grãos, incluindo sistema automatizado de controle de temperatura e umidade.",
    image: "https://images.unsplash.com/photo-1615288630158-c785a2621336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Modernização de Planta Industrial em Rondonópolis - MT",
    category: "Automação",
    description: "Implementação de sistema de automação industrial para controle e monitoramento de processos de secagem e armazenamento de grãos.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Terminal Logístico em Santos - SP",
    category: "Logística",
    description: "Desenvolvimento de terminal logístico para expedição de grãos, com capacidade de processamento de 500 toneladas por hora.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Planta de Processamento em Rio Verde - GO",
    category: "Processamento",
    description: "Projeto e construção de planta de processamento de soja com tecnologia de ponta para produção de farelo e óleo.",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Centro de Distribuição em Cascavel - PR",
    category: "Logística",
    description: "Desenvolvimento de centro de distribuição com sistema integrado de controle de estoque e expedição de produtos agrícolas.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Silos Metálicos em Luis Eduardo Magalhães - BA",
    category: "Armazenagem",
    description: "Construção de conjunto de silos metálicos com capacidade total de 80.000 toneladas para armazenamento de milho e soja.",
    image: "https://images.unsplash.com/photo-1608508005890-ba48d1c617cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
  }
];

const categories = ["Todos", "Armazenagem", "Automação", "Logística", "Processamento"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projetos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projetos Realizados" 
          subtitle="Conheça algumas das nossas soluções entregues com excelência."
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`${
                activeCategory === category 
                  ? "bg-grain-blue-600 hover:bg-grain-blue-700" 
                  : "hover:text-grain-blue-600"
              } mb-2`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="card-project"
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 right-4 bg-grain-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`text-gray-700 ${activeProject === project.id ? "" : "line-clamp-2"}`}>
                  {project.description}
                </p>
                <button 
                  className="text-grain-blue-600 font-semibold mt-4 flex items-center"
                >
                  {activeProject === project.id ? "Ver menos" : "Ver mais"}
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${activeProject === project.id ? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button className="bg-grain-blue-600 hover:bg-grain-blue-700">
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
