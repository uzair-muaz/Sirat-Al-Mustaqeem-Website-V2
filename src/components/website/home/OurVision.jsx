const OurVision = () => {
  return (
    <div className='sm:container sm:mx-auto px-6 py-10 grid md:grid-cols-2 gap-10'>
      <div className='flex flex-col justify-center'>
        <h3 className='text-custom3 text-lg sm:text-xl font-medium'>
          About Us
        </h3>
        <h1 className='text-custom2 text-4xl sm:text-5xl font-bold mt-3'>
          Vision Statement
        </h1>
        <div className='border border-custom6 w-full max-w-[280px] mt-3' />
        <p className='text-custom7 mt-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq..
        </p>
        <button className='outlined-yellow-button mt-16'>Read More</button>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src='/website-assets/vision-statement.png'
          alt='vision-image'
          className='w-full max-w-[500px]'
        />
      </div>
    </div>
  );
};

export default OurVision;
