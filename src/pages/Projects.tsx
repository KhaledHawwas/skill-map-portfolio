import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { Filter, Star } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = ["Open-Source", "Client Paid"];
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const featuredProjects = projects.filter(project => project.featured);

  const handleSkillClick = (skillId: string) => {
    navigate(`/skills?filter=${skillId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my work spanning open-source contributions and client projects
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-6 w-6 text-accent fill-current" />
                <h2 className="text-2xl font-semibold text-foreground">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSkillClick={handleSkillClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
            </div>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedCategory && (
                <Badge variant="secondary" className="ml-2">
                  {selectedCategory}
                </Badge>
              )}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSkillClick={handleSkillClick}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;