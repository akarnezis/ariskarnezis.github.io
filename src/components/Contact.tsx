import { Card } from "./ui/card";
import { Mail, Linkedin, Github, Twitter, Building2, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "a.karnezis@protonmail.com",
      link: "mailto:a.karnezis@protonmail.com",
    },
    {
      icon: Building2,
      label: "Institution",
      value: "Department of Electrical and Electronic Engineering",
      link: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sheffield, UK",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aris-karnezis-595777b5/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/akarnezis",
      color: "text-slate-700 hover:text-slate-900",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interested in collaboration, have questions, or just want to connect? I'd love to hear from you.
          </p>
        </div>
        
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-slate-900 hover:text-blue-600 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-100 rounded-lg ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Card>
        
        <p className="text-center text-slate-500 mt-12">
          Open to collaboration opportunities, speaking engagements, and consulting projects.
        </p>
      </div>
    </section>
  );
}
