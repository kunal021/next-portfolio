import data from "@/data/skillData";
import Image from "next/image";
function Skills() {
  return (
    <div
      className="flex flex-col gap-5 pt-10 pb-20 justify-center items-center"
      id="skills"
    >
      <h3 className="text-3xl font-bold text-center py-5">Skills</h3>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={skill.image96}
              alt={skill.name}
              width={50}
              height={50}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
