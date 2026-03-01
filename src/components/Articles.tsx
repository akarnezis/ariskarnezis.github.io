import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Articles() {
  const posts = [
    {
      title: "The Beautiful Mathematics Behind Protein Folding",
      excerpt: "Exploring how computational models mimic nature's most elegant solutions to one of biology's fundamental challenges.",
      date: "November 5, 2024",
      readTime: "8 min read",
      category: "Deep Dive",
      tags: ["Protein Folding", "Mathematics", "Computational Biology"],
    },
    {
      title: "Why Your DNA Isn't Your Destiny: An Introduction to Epigenetics",
      excerpt: "Understanding how environmental factors influence gene expression and what it means for personalized medicine.",
      date: "October 28, 2024",
      readTime: "6 min read",
      category: "Explainer",
      tags: ["Epigenetics", "Genetics", "Medicine"],
    },
    {
      title: "Machine Learning Meets Drug Discovery: A Game Changer?",
      excerpt: "An honest look at the promises and limitations of AI in pharmaceutical research, based on our latest findings.",
      date: "October 15, 2024",
      readTime: "10 min read",
      category: "Analysis",
      tags: ["AI", "Drug Discovery", "Opinion"],
    },
    {
      title: "The Problem with P-Values: A Researcher's Perspective",
      excerpt: "Statistical significance doesn't always mean what we think it does. Let's talk about better ways to interpret research findings.",
      date: "September 30, 2024",
      readTime: "7 min read",
      category: "Methods",
      tags: ["Statistics", "Research Methods", "Science Communication"],
    },
    {
      title: "From Lab to Life: How Basic Research Shapes Medicine",
      excerpt: "Real stories of how seemingly obscure discoveries led to breakthrough treatments we use today.",
      date: "September 12, 2024",
      readTime: "9 min read",
      category: "Story",
      tags: ["Medical Research", "History", "Innovation"],
    },
    {
      title: "Open Science: Why I Share My Research Data",
      excerpt: "The case for transparency in research and how open data accelerates scientific progress.",
      date: "August 25, 2024",
      readTime: "5 min read",
      category: "Opinion",
      tags: ["Open Science", "Research Ethics", "Collaboration"],
    },
  ];

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Academic Articles</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exploring ideas, breaking down complex topics, and sharing perspectives from the frontiers of science
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="leading-tight">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-[#2b3137] hover:text-[#1f2428] transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}