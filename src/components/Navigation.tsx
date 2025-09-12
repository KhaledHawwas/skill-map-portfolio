import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Portfolio
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300",
                  "hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;