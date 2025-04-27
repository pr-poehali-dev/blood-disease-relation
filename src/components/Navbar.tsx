import { Link, useLocation } from "react-router-dom";
import { Heart, Droplets, Info, Home } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Droplets className="h-6 w-6" />
            <span className="font-bold text-lg">ГемоИнфо</span>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" active={isActive("/")} icon={<Home size={18} />}>
              Главная
            </NavLink>
            <NavLink to="/blood-types" active={isActive("/blood-types")} icon={<Droplets size={18} />}>
              Группы крови
            </NavLink>
            <NavLink to="/diseases" active={isActive("/diseases")} icon={<Heart size={18} />}>
              Заболевания
            </NavLink>
            <NavLink to="/about" active={isActive("/about")} icon={<Info size={18} />}>
              О проекте
            </NavLink>
          </div>
          
          <div className="md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-primary-foreground border-primary-foreground hover:text-accent hover:border-accent">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Меню</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink = ({ to, active, children, icon }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        active 
          ? "bg-primary-foreground text-primary" 
          : "text-primary-foreground hover:bg-primary-foreground/10"
      }`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default Navbar;