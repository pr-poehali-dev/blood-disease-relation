import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-6 w-6" />
              <span className="font-bold text-lg">ГемоИнфо</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Информационный портал о взаимосвязи групп крови и предрасположенности к заболеваниям
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Главная</Link></li>
              <li><Link to="/blood-types" className="text-sm hover:underline">Группы крови</Link></li>
              <li><Link to="/diseases" className="text-sm hover:underline">Заболевания</Link></li>
              <li><Link to="/about" className="text-sm hover:underline">О проекте</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/disclaimer" className="text-sm hover:underline">Медицинская оговорка</Link></li>
              <li><Link to="/sources" className="text-sm hover:underline">Источники</Link></li>
              <li><Link to="/privacy" className="text-sm hover:underline">Конфиденциальность</Link></li>
              <li><Link to="/contacts" className="text-sm hover:underline">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Правовая информация</h3>
            <p className="text-sm text-primary-foreground/70">
              Информация на сайте носит справочный характер и не заменяет консультации специалиста. 
              При наличии заболеваний обратитесь к врачу.
            </p>
            <p className="text-sm mt-4 text-primary-foreground/70">
              © 2025 ГемоИнфо. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;