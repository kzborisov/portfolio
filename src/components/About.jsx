import { FaReact } from "react-icons/fa";
import HtmlLogo from "../assets/html-logo.png";
import CssLogo from "../assets/css3-logo.png";
import JsLogo from "../assets/js-logo.png";
import CanvaLogo from "../assets/canva-logo.png";
import ReactLogo from "../assets/react-logo.png";

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
        Hi There, I am Kristian Borisov, a passionate and creative web developer
        with a strong flair for crafting dynamic and visually appealing digital
        experiences. With 5 years of experience in the industry, I've had the
        privilege of working on a diverse range of projects.
        <div className='my-2' />
        Collaboration is at the heart of my approach. I believe that the best
        results come from a synergy of skills and ideas, and I enjoy working
        closely with designers, content creators, and clients to bring visions
        to life. From conceptualization to deployment, I'm committed to
        delivering projects that are not only functional but also aesthetically
        pleasing, user-friendly, and optimized for performance.
      </p>

      <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center flex-wrap gap-10 mt-10'>
        <img
          src={ReactLogo}
          alt='react logo'
          className='h-[180px] md:h-[240px]'
        />
        <img src={JsLogo} alt='js logo' className='h-[180px] md:h-[240px]' />
        <img src={HtmlLogo} alt='html log' className='h-[180px] md:h-[240px]' />
        <img src={CssLogo} alt='css logo' className='h-[180px] md:h-[240px]' />
        <img
          src={CanvaLogo}
          alt='canva logo'
          className='h-[180px] md:h-[240px]'
        />
      </div>
    </section>
  );
};

export default About;
