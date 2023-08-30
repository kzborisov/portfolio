const ProjectCard = ({ title, url, date }) => {
  return (
    <div className='rounded-xl bg-gray flex flex-col items-center justify-center gap-4 p-10'>
      <img src="" alt="project img"/>
      <p className='text-tertiary font-medium tracking-wider'>{date}</p>
      <h4 className='text-white text-lg font-semibold'>{title}</h4>
      <a href={url} target='_blank' rel='noreferrer'>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
