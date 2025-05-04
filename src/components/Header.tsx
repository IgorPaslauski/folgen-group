
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-folgen-primary">Folgen</span>
              <span className="text-folgen-secondary">Group</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
            >
              Início
            </Link>
            <a
              href="#sobre"
              className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
            >
              Serviços
            </a>
            <a
              href="#projetos"
              className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
            >
              Contato
            </a>
            <Button
              className="bg-folgen-primary hover:bg-folgen-secondary text-white"
              onClick={() => document.getElementById("orcamento")?.scrollIntoView({behavior: "smooth"})}
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white py-4 mt-2 rounded-md shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                Início
              </Link>
              <a
                href="#sobre"
                className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                Serviços
              </a>
              <a
                href="#projetos"
                className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="text-gray-800 hover:text-folgen-primary font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                Contato
              </a>
              <Button
                className="bg-folgen-primary hover:bg-folgen-secondary text-white"
                onClick={() => {
                  document.getElementById("orcamento")?.scrollIntoView({behavior: "smooth"});
                  toggleMobileMenu();
                }}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
