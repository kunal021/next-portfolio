import AboutMe from "@/components/AboutMe";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function page() {
  return (
    <div>
      <Home />
      {/* <AboutMe /> */}
      <Projects />
      <Skills />
    </div>
  );
}

export default page;
