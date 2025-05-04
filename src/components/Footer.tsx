
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-folgen-primary">Folgen</span>
              <span className="text-folgen-secondary">Group</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Soluções de engenharia industrial especializada em armazenagem de grãos, 
              silos e sistemas logísticos para o setor agrícola.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-folgen-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-folgen-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-folgen-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-300 hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Projetos de Engenharia</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Construção de Silos</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Automação Industrial</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Logística de Grãos</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Manutenção Preventiva</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-folgen-secondary" size={18} />
                <span className="text-gray-300">
                  Av. Tecnologia, 1500<br />
                  Distrito Industrial<br />
                  Cuiabá, MT, 78000-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-folgen-secondary" size={18} />
                <span className="text-gray-300">(65) 3000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-folgen-secondary" size={18} />
                <a href="mailto:contato@folgengroup.com" className="text-gray-300 hover:text-white transition-colors">
                  contato@folgengroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Folgen Group. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
