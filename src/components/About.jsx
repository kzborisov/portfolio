import { FaReact } from "react-icons/fa";
import HtmlLogo from "../assets/html-logo.png";
import CssLogo from "../assets/css3-logo.png";
import JsLogo from "../assets/js-logo.png";

const About = () => {
  return (
    <section
      id='about'
      className='text-white my-4 md:mx-10 p-10 md:p-10 md:flex md:flex-col md:gap-4'
    >
      <h2 className='text-4xl text-left font-semibold tracking-wider my-2'>
        About
      </h2>
      <p className='w-full'>
        Hi There, I am Kristian Borisov, a web developer with a passion.....
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore
        dolor rerum beatae saepe voluptatum quo porro cupiditate, ratione dicta
        ut aliquid nisi laudantium tenetur, eos perferendis architecto fuga ex
        alias neque unde! Adipisci, iusto quo quasi repudiandae similique ipsum!
      </p>

      <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center flex-wrap gap-10 mt-10'>
        <FaReact size={180} className='text-primary w-[180px] md:w-[240px]' />
        <img src={JsLogo} alt='js logo' className='w-[180px] md:w-[240px]' />
        <img src={HtmlLogo} alt='html log' className='w-[180px] md:w-[240px]' />
        <img src={CssLogo} alt='css logo' className='w-[180px] md:w-[240px]' />
      </div>
    </section>
  );
};

export default About;
