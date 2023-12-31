import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import CategorySection from "./CategorySection";
import { Colors } from "../Config";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Col, Container, Image, Row } from "react-bootstrap";
import ProductSlide from "./ProductSlide";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import HomeSlide from "./HomeSlide";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function HomePage() {
  const [loaderClick, setloaderClick] = useState(true);
  const data = [1, 2, 3];
  const dataa = [1, 2, 3, 5, 6, 5, 5, 5];
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setloaderClick(!loaderClick);
    }, 3000);
  }, []);
  return (
    <div>
      <HomeSlide />
      <Container className="px-5 my-5">
        <Row>
          {data.map((e) => {
            return (
              <Col xs={12} sm={12} md={4} lg={4}>
                <HomeCard
                  jsx={
                    <ChatBubbleLeftRightIcon className="border-1 text-md h-14 p-2 mt-1 rounded-full" />
                  }
                  text={"24 / 7"}
                  sec={"Customer Care Support"}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* category Sectio */}
      <CategorySection />
      <div
        className="text-center p-3 "
        style={{ background: Colors.main, color: Colors.text }}
      >
        <h2 className="font-bold tracking-wider">Our Best Seller</h2>
        <span>New Lanch Product have Exciting Offer </span>
      </div>
      <Container className="mt-5 ">
        {loaderClick ? (
          <Row>
            {[1, 2, 3, 3, 1, 2, 5,5].map((d) => {
              return (
                <Col xs={6} sm={6} md={4} lg={3} className="mb-2">
                  <Skeleton className="h-[250px] w-[200px]" />
                </Col>
              );
            })}
          </Row>
        ) : null}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-5 ">
          {!loaderClick
            ? dataa.map((d) => {
                return (
                  <div className="" onClick={() => navigate("/view")}>
                    <ProductCard cardName="w-[90%] " />
                  </div>
                );
              })
            : null}
        </div>
        {/* <Row className="flex justify-center  items-center my-4">
        .
       
      </Row> */}
      </Container>
      <Image
        className="w-full my-5"
        src="https://kidsstalk.in/storage/uploads/ThemePage/xOy6xZYDQbdbmytyKpiQB3kzwm5klILlEXn1QGYf.webp"
      />
      {/* slide */}
      <ProductSlide title={"Recommended For You"} />
      <Image
        className="w-full my-5"
        src="https://kidsstalk.in/storage/uploads/ThemePage/yy8Wibq8F2aE8fxRh59E22s3AHZovLs2wQe4ILTH.webp"
      />
    </div>
  );
}

export default HomePage;
