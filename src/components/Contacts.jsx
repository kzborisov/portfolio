import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { socialMedia } from "../utils/constants";

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thanks for your message! I will get back to you as soon as possible!"
    );
    setContactForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id='contacts'
      className='text-white my-4 md:mx-10 p-10 md:p-10 md:flex md:flex-col md:gap-4 md:items-center'
    >
      <h2 className='text-4xl text-left font-semibold tracking-wider my-2'>
        Contacts
      </h2>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 my-10 md:w-[70%]'
      >
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full'>
          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              onChange={(e) => {
                setContactForm({ ...contactForm, fullName: e.target.value });
              }}
              placeholder='Full Name'
              className='text-black p-2'
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => {
                setContactForm({ ...contactForm, email: e.target.value });
              }}
              placeholder='Email address'
              className='text-black p-2'
            />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            name='subject'
            id='subject'
            onChange={(e) => {
              setContactForm({ ...contactForm, subject: e.target.value });
            }}
            placeholder='Email Subject'
            className='text-black p-2'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='message'>Your Message</label>
          <textarea
            name='message'
            id='message'
            rows={5}
            onChange={(e) => {
              setContactForm({ ...contactForm, message: e.target.value });
            }}
            placeholder='Email message'
            className='text-black p-2'
          />
        </div>

        <button
          type='submit'
          className='bg-primary hover:bg-secondary p-4 text-black font-semibold rounded-xl ease-in duration-100'
        >
          Send Message
        </button>
      </form>

      <div className='flex items-center justify-center gap-4'>
        <a
          href={socialMedia.github}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:text-secondary ease-in duration-100'
        >
          <AiFillGithub size={36} />
        </a>
        <a
          href={socialMedia.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:text-secondary ease-in duration-100'
        >
          <AiFillLinkedin size={36} />
        </a>
        <a
          href={socialMedia.facebook}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:text-secondary ease-in duration-100'
        >
          <AiFillFacebook size={36} />
        </a>
        <a
          href={socialMedia.instagram}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:text-secondary ease-in duration-100'
        >
          <AiFillInstagram size={36} />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
