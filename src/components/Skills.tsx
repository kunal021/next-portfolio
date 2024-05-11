import SkillBackground from "./SkillBackground";
import SkillCards from "./SkillCards";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center" id="skills">
      <SkillBackground />
      <SkillCards />
    </div>
  );
}

export default Skills;
