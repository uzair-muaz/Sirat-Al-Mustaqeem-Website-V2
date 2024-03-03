// import Item from './FooterItem';
// import { Explore, SocialLinks } from '@/utils/constants/Footer';
// import SocialInfo from './FooterSocialInfo';
// import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <footer className='bg-[#1C2B26] text-white relative'>
      <img
        src='/website-assets/footer-top.svg'
        alt='Logo'
        className='object-center absolute top-0 left-0 w-[463px]'
      />
      <img
        src='/website-assets/footer-bottom.svg'
        alt='Logo'
        className='object-contain absolute bottom-0 right-0'
      />
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Admissions</span> now open
        </h1>
        <button
          className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 
           rounded-md text-white md:w-auto w-full"
        >
          Admission form
        </button>
      </div> */}
      {/* <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16'>
        <FooterLogo />

        <Item Links={Explore} title='WEBSITE LINKS' />

        <SocialInfo Icons={SocialLinks} />
      </div> */}

      <div className=' w-[80%] mx-auto  py-8 flex items-center justify-center border-t border-white'>
        <h2 className='text-center text-xs sm:text-sm '>
          Copyright © 2024 Sirat-Al-Mustaqeem | All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
