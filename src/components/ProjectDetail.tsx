import { useParams, Link } from "react-router";
import { projectsData } from "../data/projects";
import { Badge } from "./ui/badge";
import { Calendar, ArrowLeft, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { MathText } from "./MathText";
import { ContentSidebar } from "./ContentSidebar";
import { useMemo } from "react";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  // Get related projects (exclude current)
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projectsData
      .filter((p) => p.id !== project.id)
      .slice(0, 3)
      .map((p) => ({
        id: p.id,
        title: p.title,
        category: p.status,
        date: p.period,
        linkPrefix: "project"
      }));
  }, [project]);

  // Create table of contents for projects
  const tableOfContents = useMemo(() => {
    const sections = [
      { id: "overview", text: "Overview", level: 2 },
      { id: "objectives", text: "Objectives", level: 2 },
      { id: "methodology", text: "Methodology", level: 2 },
      { id: "results", text: "Key Results", level: 2 },
    ];

    // Add conditionally rendered sections
    if (project?.additionalImages && project.additionalImages.length > 0) {
      sections.push({ id: "visuals", text: "Research Visuals", level: 2 });
    }
    if (project?.publications && project.publications.length > 0) {
      sections.push({ id: "publications", text: "Publications", level: 2 });
    }

    return sections;
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/#projects">
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0e14]">
      {/* Header with back button */}
      <div className="bg-white dark:bg-[#151a21] border-b dark:border-[#252a31]">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <Link to={`/#project-${project.id}`}>
            <Button className="bg-[#d9653a] hover:bg-[#c25532] dark:bg-[#d9653a] dark:hover:bg-[#c25532] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Project Content */}
          <div className="bg-white dark:bg-[#151a21] rounded-lg shadow-sm p-8 lg:p-12 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className={project.status === "Ongoing" ? "bg-[#d9653a] hover:bg-[#d9653a]" : ""} variant={project.status === "Ongoing" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
              </div>
              
              <h1 className="text-4xl text-slate-900 dark:text-white font-serif">{project.title}</h1>
              
              <p className="text-xl text-slate-600 dark:text-white">{project.institution}</p>
              
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
                      Download {(project as any).pdfTitle || "Research Paper"}
                    </Button>
                  </a>
                </div>
              )}
            </div>

            {/* Overview */}
            <div id="overview" className="prose max-w-none scroll-mt-24">
              <h2 className="text-2xl text-slate-900 dark:text-white mb-4">Overview</h2>
              <p className="text-lg text-slate-700 dark:text-white whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>

            {/* Objectives */}
            <div id="objectives" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl text-slate-900 dark:text-white">Objectives</h2>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#2b3137] dark:text-[#d9653a] mt-1">•</span>
                    <span className="text-slate-700 dark:text-white">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div id="methodology" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl text-slate-900 dark:text-white">Methodology</h2>
              <p className="text-slate-700 dark:text-white">{project.methodology}</p>
            </div>

            {/* Results */}
            <div id="results" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl text-slate-900 dark:text-white">Key Results</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#2b3137] dark:text-[#d9653a] mt-1">•</span>
                    <MathText className="text-slate-700 dark:text-white">{result}</MathText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Images */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div id="visuals" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl text-slate-900 dark:text-white">Research Visuals</h2>
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
              <div id="publications" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl text-slate-900 dark:text-white">Publications</h2>
                <ul className="space-y-2">
                  {project.publications.map((publication, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-[#2b3137] dark:text-[#d9653a] mt-1">•</span>
                      <span className="text-slate-700 dark:text-white text-sm">{publication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom navigation */}
            <div className="pt-8 border-t dark:border-slate-700">
              <Link to={`/#project-${project.id}`}>
                <Button className="bg-[#d9653a] hover:bg-[#c25532] dark:bg-[#d9653a] dark:hover:bg-[#c25532] text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <ContentSidebar 
            tableOfContents={tableOfContents}
            relatedItems={relatedProjects}
            relatedTitle="MORE PROJECTS"
          />
        </div>
      </div>
    </div>
  );
}