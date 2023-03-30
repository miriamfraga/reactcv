import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import { A11y, EffectCube, Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// import { images } from '../../img/images';
// import {CV} from '../../CV/cv'


import "swiper/css/effect-cube";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/autoplay';


const Slider = ({slider}) => (
  <div className={styles.Slider}>
   {/* {slider.map((t, index)=>{  */}
  {/* return <SwiperSlide key={index}><img src={t.tool} alt={t.name} ></img></SwiperSlide>})} */}
     <Swiper
       style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#000000",
        }}
        effect={"cube"}
        grabCursor={true}
        // cubeEffect={{
          // shadow: true,
          // slideShadows: true,
          // shadowOffset: 10,
          // shadowScale: 0.54
          //  } }
           
       modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop= {true}
          autoplay = {true}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

          
        >
        
        {slider.map((t, index)=>{ 
 return <SwiperSlide key={index}><img src={t.tool} alt={t.name} ></img></SwiperSlide>})}
    
    </Swiper>
  </div>
);

// Slider.propTypes = {};

// Slider.defaultProps = {};

export default Slider;
