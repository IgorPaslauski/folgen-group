
import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos prontos para atender às suas necessidades e responder suas dúvidas."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="heading-sm mb-6">Envie sua mensagem</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Seu nome completo" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Seu e-mail" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Assunto da mensagem" 
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Sua mensagem" 
                  rows={5} 
                  className="w-full"
                />
              </div>
              
              <Button className="w-full md:w-auto bg-grain-blue-600 hover:bg-grain-blue-700">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Map and Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 mb-6">
              {/* Embed Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31844.3498515953!2d-56.099761400000004!3d-15.601499649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e1e95648e1%3A0x8c0a626ba6e60609!2sCuiab%C3%A1%2C%20MT!5e0!3m2!1sen!2sbr!4v1667489294327!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="GrainTech Location"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="heading-sm mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-grain-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-grain-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-700">
                      Av. Tecnologia, 1500<br />
                      Distrito Industrial<br />
                      Cuiabá, MT, 78000-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-grain-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-grain-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-700">(65) 3000-0000</p>
                    <p className="text-gray-700">(65) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-grain-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-grain-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-gray-700">contato@graintechsolutions.com</p>
                    <p className="text-gray-700">comercial@graintechsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-grain-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-grain-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Atendimento</h4>
                    <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-700">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
