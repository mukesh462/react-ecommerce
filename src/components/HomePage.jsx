import React from "react";
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
function HomePage() {
  const data = [1, 2, 3];
  const dataa = [1, 2, 3,5,6,5,5,5];
const navigate = useNavigate();
  return (
    <div>
      <HomeSlide/>
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
        className="text-center p-3"
        style={{ background: Colors.main, color: Colors.text }}
      >
        <h2 className="font-bold tracking-wider">Our Best Seller</h2>
        <span>New  Lanch Product have Exciting Offer  </span>
      </div>
      <Container>
      
      <Row className="flex justify-center  items-center my-4">
        {dataa.map((d) => {
          return (
            <Col className="flex justify-center items-center" xs={6} sm={6} md={4} lg={3} onClick={()=> navigate('view')}>
              <ProductCard />
            </Col>
          );
        })}
      </Row>
  
      </Container>
    <Image  className="w-full my-5" src="https://kidsstalk.in/storage/uploads/ThemePage/xOy6xZYDQbdbmytyKpiQB3kzwm5klILlEXn1QGYf.webp"/>
    {/* slide */}
    <ProductSlide/>
        <Image  className="w-full my-5" src="https://kidsstalk.in/storage/uploads/ThemePage/yy8Wibq8F2aE8fxRh59E22s3AHZovLs2wQe4ILTH.webp"/>

    </div>
  );
}

export default HomePage;
