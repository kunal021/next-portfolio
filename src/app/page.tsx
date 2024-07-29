// import Aboutme from "@/components/Aboutme";
import Home from "@/components/Home";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

function App() {
  return (
    <div>
      <div className="card z-50 h-screen">
        <Home />
      </div>
      {/* <div className="card z-40 h-screen"> */}
      {/* <Aboutme /> */}
      {/* </div> */}
      <div className="sticky bottom-0 w-full z-30 h-screen">
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
