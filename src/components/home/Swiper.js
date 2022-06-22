import React, { useContext } from 'react'

import HomeCards from './HomeCards'
import EventsContext from '../../context/eventsContext';
import '../../assets/cards.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, } from "swiper";

const Slider = () => {
    const { events } = useContext(EventsContext)
    const topThree = events?.slice(0, 6)
    console.log(topThree);

    return (
        <Swiper

            breakpoints={
                {   // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    }
                }}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}

        >
            {topThree?.map(data => (

                <SwiperSlide className='swiper__container'><HomeCards data={data} /></SwiperSlide>
            ))}

        </Swiper>
    );
};

export default Slider