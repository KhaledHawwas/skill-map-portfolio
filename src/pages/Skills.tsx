import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skills, projects } from "@/data/portfolio";
import { X } from "lucide-react";

const Skills = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(
    searchParams.get("filter")
  );

  useEffect(() => {
    if (selectedSkill) {
      setSearchParams({ filter: selectedSkill });
    } else {
      setSearchParams({});
    }
  }, [selectedSkill, setSearchParams]);

  const filteredProjects = selectedSkill
    ? projects.filter(project => project.skills.includes(selectedSkill))
    : [];

  const selectedSkillData = selectedSkill
    ? skills.find(skill => skill.id === selectedSkill)
    : null;

  const getProjectCount = (skillId: string) => {
    return projects.filter(project => project.skills.includes(skillId)).length;
  };

  const skillCategories = ["Frontend", "Backend", "Mobile", "Database", "Tools"] as const;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click on any skill to see projects where I've applied it
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-12">
            {skillCategories.map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        isSelected={selectedSkill === skill.id}
                        onClick={() => setSelectedSkill(
                          selectedSkill === skill.id ? null : skill.id
                        )}
                        projectCount={getProjectCount(skill.id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filtered Projects */}
          {selectedSkill && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">
                    Projects using {selectedSkillData?.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSkill(null)}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear Filter
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No projects found using {selectedSkillData?.name}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;