import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, natus eligendi? Mollitia, odit saepe enim molestias ipsam iure reiciendis pariatur corrupti atque quod architecto nulla quidem, ullam, odio non! Quibusdam?",
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, natus eligendi? Mollitia, odit saepe enim molestias ipsam iure reiciendis pariatur corrupti atque quod architecto nulla quidem, ullam.",
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, natus eligendi? Mollitia, odit saepe enim molestias ipsam iure reiciendis pariatur corrupti.",
    },
    {
      avatar: AVTR4,
      name: "Nana Ama McBrown",
      review:
        "Amet consectetur, adipisicing elit. Exercitationem, natus eligendi? Mollitia, odit saepe enim molestias ipsam iure reiciendis pariatur corrupti atque quod architecto nulla quidem, ullam, odio non! Quibusdam?",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonials" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
