import { useContext, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { CheckCircle2 } from "lucide-react";
import { LanguageContext } from "./LanguageToggle";

const AboutSection = () => {
  const [sobreDescricao, setSobreDescricao] = useState({});
  const [sobreMissao, setSobreMissao] = useState({});
  const [sobreVisao, setSobreVisao] = useState({});
  const [sobreValores, setSobreValores] = useState({});

  const contextLanguage = useContext(LanguageContext) as any;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/sobre/sobre.json");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do JSON");
        }
        const language = contextLanguage?.language || "pt-BR";
        const translatedData = data[language] || data["pt-BR"];
        setSobreDescricao(translatedData.descricao);
        setSobreMissao(translatedData.missao);
        setSobreVisao(translatedData.visao);
        setSobreValores(translatedData.valores);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [contextLanguage]);

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre a Folgen Group"
          subtitle="Há mais de 15 anos desenvolvendo soluções inovadoras para o armazenamento e processamento de grãos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-sm mb-6 text-grain-blue-600">
              {sobreDescricao.title}
            </h3>
            <p className="mb-6 text-gray-700">{sobreDescricao.text}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <CheckCircle2
                  className="text-grain-green-500 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-2">{sobreMissao.title}</h4>
                  <p className="text-gray-700">{sobreMissao.text}</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="text-grain-green-500 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-2">{sobreVisao.title}</h4>
                  <p className="text-gray-700">{sobreVisao.text}</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="text-grain-green-500 mr-2 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold mb-2">{sobreValores.title}</h4>
                  <p className="text-gray-700">{sobreValores.text}</p>
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
