import { Fragment } from "react";
import { projects } from "../utils/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  console.log(Boolean(projects.length !== 0));
  return (
    <section id='projects' className='text-white my-4 md:mx-10 p-10 md:p-10'>
      <h2 className='text-4xl font-semibold tracking-wider my-2'>Projects</h2>

      <div className='flex flex-col md:flex-row gap-4 mt-10'>
        {projects.length !== 0 ? (
          projects.map((proj) => (
            <Fragment key={proj.title}>
              <ProjectCard title={proj.title} url={proj.url} date={proj.date} />
            </Fragment>
          ))
        ) : (
          <h4 className='text-2xl text-primary opacity-90 font-semibold'>
            Comming soon! Please be patient. <br /> Sorry for the disturbance
          </h4>
        )}
      </div>
    </section>
  );
};

export default Projects;
