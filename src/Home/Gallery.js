import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
// import img1 from './Images/img1.png'
// import img2 from './Images/img2.png'
// import img3 from './Images/img3.png'
// import img4 from './Images/img4.png'


const Gallery = () => {
  return (
    <div>
      <p className='uppercase text-5xl text-center mt-20 mb-20 font-medium text-[#FF9933]'>Gallery</p>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}

          navigation={true}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide><img className='h-[400px]' src='img1.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img2.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img3.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img4.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img1.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img2.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img3.png' /></SwiperSlide>
          <SwiperSlide><img className='h-[400px]' src='img4.png' /></SwiperSlide>

        </Swiper>

      </div>
          <p className='text-center text-2xl mt-20 font-medium'>TO REDUCE ELECTION COST & INCREASE VOTE SWINGS</p>
      <div className='flex justify-center mt-5 '>
        <div className='z-0 absolute'>
          <button class="border-2 py-[7px] rounded-3xl px-8 text-xl border-[#FF9933] text-[#FF9933]">connect us</button>
          <button class="border-2 py-[7px] text-xl rounded-3xl px-9 text-white bg-[#FF9933] ">contact us</button>
        </div>

        <div className='relative z-10'><p className='border px-[14px] py-2 bg-white rounded-full text-xl border-[#FF9933] '>or</p></div>
      </div>
    </div>
  );
};

export default Gallery;