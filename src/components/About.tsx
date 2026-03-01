import { Card } from "./ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "PhD in Applied & Computational Mathematics",
      description: "Sheffield University, 2023",
    },
    {
      icon: Award,
      title: "5+ Publications",
      description: "In leading journals and conferences",
    },
    {
      icon: BookOpen,
      title: "Science Communication",
      description: "Making research accessible to all",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bridging the gap between complex research and practical applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="prose prose-slate max-w-none text-justify">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a Research Associate at the Department of Electrical and Electronic Engineering with a strong
            background in computational mathematics, wave propagation, and acoustics. I develop machine 
            learning and physics-informed models for automated inspection of buried pipes. I use acoustic and
            LiDAR sensing, computer vision, and advanced localisation to detect blockages and structural 
            defects and to enable predictive maintenance of critical pipeline infrastructure.
            

          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Throughout my career, I've had the privilege of collaborating with diverse teams across 
            multiple institutions, contributing to projects that push the boundaries of what's possible 
            in computational science. I believe in the power of interdisciplinary collaboration and 
            the importance of making scientific knowledge accessible to everyone.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            Beyond research, I'm passionate about science communication. Through this platform, I share 
            insights, interesting problems, and the stories behind the science - making complex ideas 
            understandable and engaging for a broader audience.
          </p>
        </div>
      </div>
    </section>
  );
}
