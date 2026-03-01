import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import { Badge } from "./ui/badge";
import { Calendar, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { MathText } from "./MathText";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Project not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-slate-50 border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 max-w-4xl py-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-[#2b3137] hover:text-[#1f2428] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                {project.status}
              </Badge>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>
            </div>
            
            <h1 className="text-4xl text-slate-900">{project.title}</h1>
            
            <p className="text-xl text-slate-600">{project.institution}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* PDF Download Button */}
            {(project as any).pdfDownload && (
              <div className="pt-4">
                <a 
                  href={(project as any).pdfDownload} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#2b3137] hover:bg-[#1f2428] text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    View {(project as any).pdfTitle || "Research Paper"}
                  </Button>
                </a>
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </div>

          {/* Objectives */}
          <div className="space-y-4">
            <h2 className="text-2xl text-slate-900">Objectives</h2>
            <ul className="space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#2b3137] mt-1">•</span>
                  <span className="text-slate-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div className="space-y-4">
            <h2 className="text-2xl text-slate-900">Methodology</h2>
            <p className="text-slate-700">{project.methodology}</p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl text-slate-900">Key Results</h2>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#2b3137] mt-1">•</span>
                  <MathText className="text-slate-700">{result}</MathText>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Images */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl text-slate-900">Research Visuals</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.additionalImages.map((image, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                    <img 
                      src={image} 
                      alt={`Research visual ${index + 1}`}
                      className="w-full h-full object-cover px-[5px] px-[30px] py-[0px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {project.publications && project.publications.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl text-slate-900">Publications</h2>
              <ul className="space-y-2">
                {project.publications.map((publication, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#2b3137] mt-1">•</span>
                    <span className="text-slate-700 text-sm">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom navigation */}
          <div className="pt-8 border-t">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-[#2b3137] hover:text-[#1f2428] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}