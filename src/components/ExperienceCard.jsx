const ExperienceCard = ({ title, start, end, tasks }) => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 bg-gray p-10 rounded-xl'>
      <h4 className='text-primary text-2xl font-semibold'>{title}</h4>
      <p className='font-semibold text-tertiary'>
        {start} - {end}
      </p>

      <ul className='list-disc p-4'>
        {tasks.map((task, idx) => (
          <li key={`${task}-${idx}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
