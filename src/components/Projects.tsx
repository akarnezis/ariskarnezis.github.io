import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Research Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of collaborative research initiatives I've contributed to throughout my academic career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="leading-tight">{project.title}</CardTitle>
                  <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-700">{project.description}</p>
                
                <div>
                  <p className="text-sm text-slate-600 mb-2">{project.institution}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-[#2b3137] hover:text-[#1f2428] transition-colors">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}