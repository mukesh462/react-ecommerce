import React, { useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Collapse, Divider, Image } from "antd";
import { data } from "autoprefixer";
import TextRender from "./TextRender";
import ProductSlide from "./ProductSlide";
import ProductCard from "./ProductCard";

const Listimage = ({ size }) => {
  return (
    <img
      src="https://kidsstalk.in/storage/uploads/product/KTS33209.webp"
      className={`w-[${size} h-[${size}] rounded-lg cursor-pointer`}
    ></img>
  );
};
function ProductView() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    
  const items = [
    {
      key: "1",
      label: <p className="font-bold tracking-widest">Select Varient</p>,
      children: (
        <Row className="gap-2 flex justify-center">
          {[1, , 2, 2, 5, 65, 614, 46, 1654, 6].map(() => (
            <Col lg={2} xs={3} sm={3} md={2}>
              <Listimage size={"60px"} />
            </Col>
          ))}
        </Row>
      ),
    },
  ];
  const Rbreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    865:{
        slidesPerView: 4,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  };

  const breakpoints = {
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2  ">
          <div className=" sm:mx-0  md:mx-8 lg:mx-10 my-2">
            <div className="top flex justify-center">
              <Image.PreviewGroup
                items={[
                    "https://kidsstalk.in/storage/uploads/product/KTS33209_3.webp",
                  "https://kidsstalk.in/storage/uploads/product/KTS33209.webp",
                  "https://kidsstalk.in/storage/uploads/product/KTS33209.webp",
                ]}
              >
                <Image
                  className="rounded-lg max-h-[520px]"
                  src="https://kidsstalk.in/storage/uploads/product/KTS33209.webp"
                />
              </Image.PreviewGroup>
              {/* <img
                src="https://kidsstalk.in/storage/uploads/product/KTS33209.webp"
                className="rounded-lg"
                alt=""
              /> */}
            </div>

            <div className="bottom flex  space-x-4 my-2 sm:space-x-0 relative sm:mx-0 md:mx-2 lg:mx-4">
              <div className="border-1 top-10  cursor-pointer right-2  border-gray-100 absolute p-2 bg-[#4F46E5] rounded z-10 mainRight">
                <ChevronRightIcon className="h-5 text-white" />
              </div>
              <Swiper
                navigation={{ nextEl: ".mainRight", prevEl: ".mainleft" }}
                modules={[Navigation]}
                onSlideChange={() => console.log("slide change")}
                className=" my-2 mx-2 "
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={breakpoints}
              >
                {[121, 24, 4, 4, 5, 5, 4, 2, 7, 2, 7, 6].map(() => {
                  return (
                    <SwiperSlide className="">
                      <Listimage size={"100px"} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="border-1 top-10 -left-2 cursor-pointer border-gray-100 absolute p-2 bg-[#4F46E5] rounded z-10 mainleft">
                <ChevronLeftIcon className="h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="px-2 mt-2">
            <h1 className="text-2xxl my-2">
              Shimmer Solid Star Glitter Fluffy Sleeveless Frock -baby Pink
              <Badge bg="success" className="mx-2">
                New
              </Badge>
            </h1>
            {/* <Badge bg="warning"  className="tracking-widest font-bold text-black">  4 left </Badge> */}
            {/* <hr /> */}
            <div className="price">
              <div className="flex">
                <p className="text-2xl font-bold">₹ 5451</p>
                <span className="line-through ml-3 mt-2">₹ 454</span>
               
              </div>
              <span>Exclude All tax</span>
            </div>
            <Divider className="mx-2" />

            <div className="size">
              <h1 className="font-bold my-2">Select Size</h1>
              <Row>
                {[1, 5, 2, 5, 4].map(() => {
                  return (
                    <Col lg={2} sm={3} md={3} xs={3} className="mb-1">
                      <p className=" p-2 border-1 border-[#4F46E5] rounded-md text-center hover:bg-[#4F46E5] hover:text-white cursor-pointer ">
                        121xl
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div className="vairent">
              <Collapse
                accordion
                expandIconPosition="end"
                bordered={false}
                defaultActiveKey={1}
                className="my-3"
                items={items}
              />
            </div>
            <Divider />
            {/* buttom */}
            <button className="px-5 rounded-md bg-[#4F46E5] items-center text-white py-2 my-3 flex justify-between text-center">
              Add to Bag{" "}
              <ShoppingCartIcon className="text-white h-6 mx-2 stroke-white" />
            </button>
            <div className="details">
              <div className="h1 text-xl font-bold">Product Details</div>
              <p className="p-1">
                <TextRender
                  text={`Lorem ipsum dolor, sit a rem maiores minus ipsum consequuntur quia esse officia culpa, tempore id minima possimus assumenda natus quisquam in! Velit assumenda dolor culpa cumque voluptatum, ipsa, obcaecati alias impedit numquam voluptate nostrum voluptatibus unde voluptas, pariatur minima aspernatur nesciunt ipsum. Repellat suscipit odit, natus molestias dicta perspiciatis, eius et, esse minus modi omnis eos quis alias. Vero maxime reiciendis commodi, nostrum atque fuga distinctio velit facilis temporibus, sapiente quidem quo! Distinctio, perferendis iusto ea, nihil repellendus ut dolore culpa autem dicta vel alias vitae inventore quibusdam accusamus delectus modi sunt quaerat, iure repellat? Quasi veritatis facere, aspernatur quas iure mollitia molestiae possimus suscipit nulla optio eveniet debitis veniam quaerat ipsum modi quae deleniti, maiores rerum pariatur! Ab quos perferendis fugiat. Amet veniam excepturi aliquam mollitia cupiditate impedit numquam. Alias at voluptatem et ea eum quibusdam dignissimos esse assumenda rem possimus. Atque quasi placeat sit pariatur neque corporis blanditiis accusantium voluptas fugit sunt magni, nam molestiae ipsa est dolore quidem provident. Voluptate, impedit eveniet?                </p>
`}
                  maxChars={10}
                />
              </p>
            </div>
          </div>
        </div>
        {/* relasted */}

        <div className="my-5">
          <p className="text-2xl font-bold bg-[#4F46E5] text-white py-3 pl-5">
            Releated Products
          </p>
          <Container className="relative ">
          <ArrowRightCircleIcon className="h-10 cursor-pointer rightRow  absolute z-10 text-[#4F46E5] bg-white rounded right-0 top-52 " />

            <Swiper
              navigation={{ nextEl: ".rightRow", prevEl: ".movePre" }}
              breakpoints={Rbreakpoints}
              modules={[Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="my-3 flex justify-center"
            >
                <Row className="flex justify-center items-center">
                    {[1, 2, 3, 5, 3, 8, 25].map(() => {
                return (
                  <SwiperSlide>
                    <ProductCard  />
                  </SwiperSlide>
                );
              })}
                </Row>
              
            </Swiper>
          <ArrowLeftCircleIcon className="h-10 cursor-pointer movePre absolute z-10 text-[#4F46E5] bg-white rounded left-0 top-52  " />

          </Container>
        </div>
      </Container>
    </div>
  );
}

export default ProductView;
