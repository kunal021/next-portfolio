// import AboutMe from "@/components/AboutMe";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

function page() {
  return (
    <div>
      <Home />
      {/* <AboutMe /> */}
      <Projects />
      <Skills />
      <Socials />
    </div>
  );
}

export default page;
