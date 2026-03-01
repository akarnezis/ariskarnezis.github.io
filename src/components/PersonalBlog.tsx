import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, ArrowRight, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function PersonalBlog() {
  const posts = [
    {
      title: "My Journey into Research: From Curiosity to Career",
      excerpt: "Reflecting on the unexpected path that led me to where I am today, and the moments that shaped my love for science.",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Personal",
      tags: ["Career", "Reflection", "Science"],
    },
    {
      title: "Finding Balance: Life as a Researcher",
      excerpt: "Thoughts on navigating the demands of academic life while maintaining perspective and personal well-being.",
      date: "October 20, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
      tags: ["Work-Life Balance", "Academia", "Mental Health"],
    },
    {
      title: "Books That Changed How I Think About Science",
      excerpt: "A collection of reads that inspired me, challenged my assumptions, and expanded my understanding of the scientific process.",
      date: "October 5, 2024",
      readTime: "7 min read",
      category: "Recommendations",
      tags: ["Books", "Learning", "Inspiration"],
    },
    {
      title: "The Art of Asking Good Questions",
      excerpt: "What I've learned about curiosity, humility, and the importance of not knowing all the answers.",
      date: "September 18, 2024",
      readTime: "5 min read",
      category: "Thoughts",
      tags: ["Philosophy", "Research", "Learning"],
    },
    {
      title: "Travel Diaries: Conferences Around the World",
      excerpt: "Stories from the road—the cities, people, and unexpected moments that make academic travel memorable.",
      date: "August 30, 2024",
      readTime: "8 min read",
      category: "Travel",
      tags: ["Conferences", "Travel", "Networking"],
    },
    {
      title: "Why I Started Writing (And Why You Should Too)",
      excerpt: "The surprising benefits of putting ideas into words, and how writing has transformed my thinking.",
      date: "August 10, 2024",
      readTime: "6 min read",
      category: "Writing",
      tags: ["Communication", "Personal Growth", "Creativity"],
    },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl mb-4 text-slate-900">Personal Blog</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stories, reflections, and musings on life, science, and everything in between
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
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
                    Read Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}