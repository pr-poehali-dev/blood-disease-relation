import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">ГруппыКрови.рф</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </a>
            <a href="/#diseases" className="text-sm font-medium hover:text-primary transition-colors">
              Заболевания
            </a>
            <a href="/#blood-types" className="text-sm font-medium hover:text-primary transition-colors">
              Группы крови
            </a>
            <a href="/#research" className="text-sm font-medium hover:text-primary transition-colors">
              Исследования
            </a>
            <Button size="sm">Проверить риски</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <a
                href="/"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </a>
              <a
                href="/#diseases"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Заболевания
              </a>
              <a
                href="/#blood-types"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Группы крови
              </a>
              <a
                href="/#research"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Исследования
              </a>
              <Button className="mt-2">Проверить риски</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;