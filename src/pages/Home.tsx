import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hello, I'm a Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm a passionate software developer specializing in mobile and web applications. 
              I love creating clean, efficient code and bringing ideas to life through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-soft">
                <Link to="/projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-soft">
                <Link to="/skills">
                  <Code className="mr-2 h-5 w-5" />
                  Explore Skills
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg bg-gradient-card shadow-card border">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Skills Mastered</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card shadow-card border">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card shadow-card border">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Project Categories</div>
            </div>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a dedicated developer with experience in both client work and open-source projects. 
              My expertise spans mobile development with Android and Kotlin, backend systems with Java, 
              and modern web technologies. I believe in writing clean, maintainable code and creating 
              user experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="shadow-soft">
                <Link to="/skills">Discover My Skills</Link>
              </Button>
              <Button asChild variant="secondary" className="shadow-soft">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;