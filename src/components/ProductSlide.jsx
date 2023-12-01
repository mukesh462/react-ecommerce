import React from "react";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import "../App.css";

function ProductSlide({title}) {
  const data = [1, 1, 2, 25, 2, 5, 5, 5, , 5, 5, 5, 5, 5, 5, 5, 5];
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <div className=" text-white flex justify-between items-center bg-indigo-600 py-3 my-3">
        <h1 className="lg:md:text-xl md:text-xl font-bold tracking-wider pl-5">
         {title}
        </h1>
        <div className="flex">
          <ArrowLeftCircleIcon
            className="h-10 cursor-pointer movePre"
            id="movePre"
          />
          <ArrowRightCircleIcon className="h-10 cursor-pointer rightRow " />
        </div>
      </div>
      <Container>
      

        <Swiper
          navigation={{ nextEl: ".rightRow", prevEl: ".movePre" }}
          breakpoints={breakpoints}
          modules={[Navigation, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
         
        >
          {data.map(() => {
            return (
              <SwiperSlide>
                <ProductCard cardName="w-full" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}

export default ProductSlide;
