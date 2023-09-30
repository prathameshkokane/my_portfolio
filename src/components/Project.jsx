import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineLink,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { reactProjects } from "../data";

const Project = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper-container"
    >
      {reactProjects.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="image-container">
            <img src={item.image} alt="" />
          </div>
          <div className="info-container">
            <h3>{item.title}</h3>
            <h4>{item.languages}</h4>
            <p>{item.point1}</p>
            <p>{item.point2}</p>
            <p>{item.point3}</p>
            <div className="link-buttons">
              <Link to={item.link1} target="blank">
                <button>
                  <FaGithub />
                </button>
              </Link>
              <Link to={item.link2} target="blank">
                <button>
                  <AiOutlineLink />
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <AiOutlineArrowLeft />
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next slider-arrow">
          <AiOutlineArrowRight />
        </div>
      </div>
    </Swiper>
  );
};

export default Project;
