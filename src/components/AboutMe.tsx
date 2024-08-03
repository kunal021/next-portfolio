/* eslint-disable @next/next/no-img-element */

function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-5xl font-bold">About Me</h3>
      <div className="flex flex-col md:flex-row justify-center items-start w-[85%] mt-12 gap-10">
        <img
          src="/Kunal_animated.jpg"
          alt="profile"
          className="rounded-xl m-auto h-32 w-32 md:h-64 md:w-64"
        />
        <div className="flex flex-col justify-start lg:w-[50%] gap-10 my-auto">
          <p className="text-lg md:text-2xl font-bold text-center sm:text-start mx-auto md:mx-0">
            Hello everyone 👋, Kunal here.
          </p>
          <p className="text-xs md:text-base font-medium text-center md:text-start">
            I&apos;m a passionate Full Stack Developer, with a passion for
            creating beautiful and performant web applications. I&apos;m an
            undergraduate student from India and am currently pursuing my
            Bachelor of Engineering in Computer Engineering from Gujarat
            Technological University. I work with technologies like JavaScript,
            TypeScript, ReactJS, NextJS, Tailwind CSS, NodeJS, ExpressJS,
            MongoDB, PostgreSQL and Docker.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
