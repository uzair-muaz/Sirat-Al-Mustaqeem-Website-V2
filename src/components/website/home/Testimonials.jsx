'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
});

import { useCallback, useRef } from 'react';
import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { testimonialsArray } from '@/utils/website/constants/testimonials';

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const buttonStyle =
    'text-[#fbbf11] text-lg rounded-full p-2 cursor-pointer border border-[#fbbf11] hover:text-white hover:bg-[#fbbf11] transition-all duration-700';

  return (
    <div className='py-10 w-full'>
      <div className='sm:container sm:mx-auto px-6 flex flex-col justify-center items-center'>
        <h3 className='text-custom4 text-lg sm:text-xl font-medium'>
          Testimonials
        </h3>
        <h1 className='text-custom2 text-4xl sm:text-5xl font-bold mt-3 text-center'>
          Parent Perspectives
        </h1>
        <div className='border border-custom6 w-full max-w-[280px] mt-3' />
      </div>

      <Swiper
        ref={sliderRef}
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {testimonialsArray.map((item, index) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <div className='sm:container sm:mx-auto relative pt-[310px]'>
              <div className='custom-react-player w-[90%] max-w-[925px] h-[425px] p-5 absolute left-6 sm:left-0 top-20 border border-custom6 rounded-2xl'>
                <ReactPlayer
                  url={item.videoLink}
                  controls
                  width='100%'
                  height='100%'
                />
              </div>
            </div>
            <div className='pt-56 md:pt-52 pb-10 bg-custom2 w-full'>
              <div className='sm:container sm:mx-auto px-6 sm:px-0 grid md:grid-cols-2 gap-4'>
                <div className='flex md:justify-center items-end'>
                  <div className='flex gap-4'>
                    <button className={buttonStyle} onClick={handlePrev}>
                      <PiCaretLeftBold />
                    </button>
                    <button className={buttonStyle} onClick={handleNext}>
                      <PiCaretRightBold />
                    </button>
                  </div>
                </div>
                <div>
                  <h2 className='text-white text-xl sm:text-3xl font-bold mt-3'>
                    {item.parentName}
                  </h2>
                  <div className='border border-custom6 w-full max-w-[280px] mt-3' />
                  <p className='text-white mt-7'>{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
