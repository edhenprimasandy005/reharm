import 'swiper/css';

import { CoursesData } from '@data/dummy';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Card = ({ item }: any) => {
  return (
    <div className="my-3 flex flex-col rounded-2xl bg-white shadow-md hover:shadow-lg">
      <img src={item.image} className="rounded-t-2xl" alt="" />
      <div className="mt-[-20px] rounded-2xl bg-white p-4">
        <span className="mb-2 text-base font-semibold">{item.name}</span>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

const SectionCategories = () => {
  return (
    <section className="container mx-auto items-center p-4">
      <h2 className="mb-2 text-3xl font-semibold">Courses</h2>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {CoursesData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                {' '}
                <Card item={item} />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};
export default SectionCategories;
