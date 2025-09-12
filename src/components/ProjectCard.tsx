import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project, skills } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onSkillClick?: (skillId: string) => void;
}

const ProjectCard = ({ project, onSkillClick }: ProjectCardProps) => {
  const projectSkills = skills.filter(skill => project.skills.includes(skill.id));

  return (
    <div className="group relative p-6 rounded-lg bg-gradient-card shadow-card border hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <Star className="h-4 w-4 text-accent fill-current" />
            )}
          </div>
          <Badge 
            variant={project.category === "Open-Source" ? "default" : "secondary"}
            className="mb-3"
          >
            {project.category}
          </Badge>
        </div>
        
        {project.link && (
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {projectSkills.map((skill) => (
          <Badge
            key={skill.id}
            variant="outline"
            className={cn(
              "cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors",
              onSkillClick && "hover:shadow-sm"
            )}
            onClick={() => onSkillClick?.(skill.id)}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
      
      <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </div>
  );
};

export default ProjectCard;