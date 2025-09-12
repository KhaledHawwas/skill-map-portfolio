import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Skill } from "@/data/portfolio";

interface SkillCardProps {
  skill: Skill;
  isSelected?: boolean;
  onClick?: () => void;
  projectCount?: number;
}

const SkillCard = ({ skill, isSelected, onClick, projectCount }: SkillCardProps) => {
  const categoryColors = {
    Frontend: "bg-blue-100 text-blue-800",
    Backend: "bg-green-100 text-green-800", 
    Mobile: "bg-purple-100 text-purple-800",
    Database: "bg-orange-100 text-orange-800",
    Tools: "bg-gray-100 text-gray-800",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-lg bg-gradient-card shadow-card border cursor-pointer",
        "transition-all duration-300 hover:shadow-hover hover:-translate-y-1",
        isSelected && "ring-2 ring-primary shadow-hover -translate-y-1"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <Badge className={categoryColors[skill.category]}>
          {skill.category}
        </Badge>
      </div>
      
      {projectCount !== undefined && (
        <p className="text-sm text-muted-foreground">
          {projectCount} project{projectCount !== 1 ? 's' : ''}
        </p>
      )}
      
      <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </div>
  );
};

export default SkillCard;