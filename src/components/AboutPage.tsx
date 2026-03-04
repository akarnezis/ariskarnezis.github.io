import { Navigation } from "./Navigation";
import { GraduationCap, Award, BookOpen, Target, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 py-24 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-6 text-slate-900">About Me</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A journey through mathematics, physics, and the pursuit of understanding complex systems
            </p>
          </div>

          {/* Biography */}
          <section className="mb-16">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="w-6 h-6 text-[#2b3137]" />
                  Biography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 text-justify leading-relaxed">
                <p>
                  I'm a Research Associate specializing in applied mathematics, with a focus on modeling complex physical 
                  and engineered systems. My work bridges the gap between theoretical mathematics, physics, and practical 
                  applications in intelligent systems.
                </p>
                <p>
                  My research journey has taken me from understanding the fundamental properties of wave propagation 
                  in disordered materials to developing probabilistic and machine learning approaches for real-world engineering problems. 
                  I'm particularly interested in how mathematical models can illuminate the behavior of systems that are 
                  too complex to understand through intuition alone.
                </p>
                <p>
                  Beyond research, I'm passionate about science communication and making complex ideas accessible. 
                  Through my blog and academic writing, I aim to share not just the results of research, but the process - the 
                  struggles, breakthroughs, and human side of doing science.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-[#2b3137]" />
              Education
            </h2>
            <div className="space-y-6">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">PhD in Applied & Computational Mathematics</h3>
                      <p className="text-slate-600 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Sheffield
                      </p>
                      <p className="text-slate-500 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        2019 - 2023
                      </p>
                      <p className="text-slate-700">
                        Thesis: "Wave Propagation in Disordered Materials and Machine Learning Applications"
                      </p>
                      <p className="text-slate-600 mt-2">
                        Focused on mathematical modeling of elastic wave scattering in complex media, with applications 
                        to non-destructive testing and pipeline inspection using physics-informed neural networks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">MSc in Quantum Technologies</h3>
                      <p className="text-slate-600 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Sussex
                      </p>
                      <p className="text-slate-500 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        2017 - 2019
                      </p>
                      <p className="text-slate-600">
                        Specialized in mathematical modeling and computational methods, with coursework in partial 
                        differential equations, numerical analysis, and scientific computing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">BSc in Pure & Applied Mathematics</h3>
                      <p className="text-slate-600 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Imperial College London
                      </p>
                      <p className="text-slate-500 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        2014 - 2017
                      </p>
                      <p className="text-slate-600">
                        First Class Honours. Foundation in both theoretical and applied aspects of mathematics and physics, 
                        with a focus on analytical mechanics, quantum theory, and mathematical methods.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Research Interests */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 flex items-center gap-2">
              <Target className="w-8 h-8 text-[#2b3137]" />
              Research Interests
            </h2>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Wave Mechanics</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Elastic wave propagation in complex media</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Multiple scattering theory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Disordered and random media</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Machine Learning</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Physics-informed neural networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Deep learning for inverse problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Data-driven modeling of physical systems</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Applied Mathematics</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Partial differential equations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Asymptotic analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Computational methods</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Engineering Applications</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Non-destructive testing and evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Pipeline inspection and monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Structural health monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Awards & Honors */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 flex items-center gap-2">
              <Award className="w-8 h-8 text-[#2b3137]" />
              Awards & Honors
            </h2>
            <div className="space-y-4">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-1">
                        Winter School Hackathon Winner
                      </h3>
                      <p className="text-slate-600 mb-2">
                        Workshop on Mathematical Theory and Applications of Multiple Wave Scattering
                      </p>
                      <p className="text-slate-500">Cambridge, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-1">
                        EPSRC Doctoral Training Partnership
                      </h3>
                      <p className="text-slate-600 mb-2">
                        Full PhD funding with additional travel and research support
                      </p>
                      <p className="text-slate-500">2019 - 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-1">
                        Best Presentation Award
                      </h3>
                      <p className="text-slate-600 mb-2">
                        Graduate Student Symposium, Department of Applied Mathematics
                      </p>
                      <p className="text-slate-500">2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Professional Timeline */}
          <section>
            <h2 className="text-3xl mb-8 text-slate-900">Professional Timeline</h2>
            <div className="relative border-l-2 border-slate-300 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="mb-1 text-slate-500">2023 - Present</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Research Associate</h3>
                <p className="text-slate-700">
                  University of Sheffield, Department of Applied Mathematics
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="mb-1 text-slate-500">2019 - 2023</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">PhD Researcher</h3>
                <p className="text-slate-700">
                  University of Sheffield, Department of Applied Mathematics
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="mb-1 text-slate-500">2017 - 2019</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Graduate Student</h3>
                <p className="text-slate-700">
                  University of Oxford, Mathematical Institute
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
                <div className="mb-1 text-slate-500">Summer 2018</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Research Intern</h3>
                <p className="text-slate-700">
                  National Physical Laboratory, Acoustics Group
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}