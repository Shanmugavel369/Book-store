import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide> 2</SwiperSlide>
        <SwiperSlide> 3</SwiperSlide>
        <SwiperSlide> 4</SwiperSlide>
        <SwiperSlide> 5</SwiperSlide>
        <SwiperSlide> 6</SwiperSlide>
        <SwiperSlide> 7</SwiperSlide>
        <SwiperSlide> 8</SwiperSlide>
        <SwiperSlide> 9</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard
