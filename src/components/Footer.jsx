const Footer = () => {
  return (
    <div className='text-primary md:mx-10 p-10 flex flex-col gap-4 items-center'>
      <div className='w-full h-[2px] bg-primary'></div>
      <p className='text-xl flex items-center justify-center flex-col'>
        <div>&#169; Kristian Borisov - 2023</div>
        <hr className='bg-primary w-full h-[1px] my-1' />
        <div> All Right Reserved</div>
      </p>
    </div>
  );
};

export default Footer;
