import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Articles } from "./Articles";
import { PersonalBlog } from "./PersonalBlog";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Articles />
      <PersonalBlog />
      <Contact />
    </>
  );
}
