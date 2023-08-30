import { Fragment } from "react";
import { experience } from "../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id='experience' className='text-white my-4 md:mx-10 p-10 md:p-10'>
      <h2 className='text-4xl font-semibold tracking-wider my-2'>Experience</h2>

      <div className='flex flex-col md:flex-row gap-4 mt-10'>
        {experience.map((exp) => (
          <Fragment key={exp.title}>
            <ExperienceCard
              title={exp.title}
              start={exp.start}
              end={exp.end}
              tasks={exp.tasks}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Experience;
