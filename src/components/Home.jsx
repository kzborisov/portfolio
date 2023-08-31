import ProfilePic from "../assets/profile-pic.jpg";

const Home = () => {
  return (
    <section
      id='hero'
      className='text-white p-4 md:p-10 md:flex items-center justify-center md:justify-start md:mt-[7rem]'
    >
      <img
        src={ProfilePic}
        alt='profile picture'
        className='rounded-full object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto md:mx-[3rem] my-4'
      />
      <div className='flex flex-col justify-center items-start gap-4 md:gap-6 p-4'>
        <h1 className='text-left text-6xl font-semibold'>Kristian Borisov</h1>
        <p className='text-left text-l md:text-2xl font-medium leading-8'>
          Trasforming ideas into functional, elegant solutions - let`s
          collaborate
        </p>
        <div className='flex w-full flex-col items-center justify-center md:justify-start gap-4 sm:flex-row'>
          <a
            href='/cv.pdf'
            download='kristian-borisov-CV'
            target='_blank'
            className='px-6 md:px-8 py-4 rounded-xl bg-primary text-black font-semibold m-auto md:m-0 w-full md:w-auto text-center text-xl hover:drop-shadow-primary ease-in duration-100'
          >
            Download Resume
          </a>

          <a
            href='#contacts'
            className='px-6 md:px-8 py-4 rounded-xl border-2 border-primary border-solid text-primary font-semibold m-auto md:m-0 w-full md:w-auto text-center text-xl hover:border-black hover:bg-primary hover:text-black hover:drop-shadow-primary ease-in duration-300'
          >
            Hire Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
