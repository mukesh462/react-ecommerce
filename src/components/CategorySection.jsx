import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Colors } from "../Config";

function CategorySection() {
  const data = [21, 2, 54, 5, 1, 5];
  return (
    <div className="">
      <div
        className="head  text-center py-3 "
        style={{ background: Colors.main, color: Colors.text }}
      >
        <h3 className="font-bold text-white ">Shop By Categoies</h3>

        <span className="text-white">
          {" "}
          Shop all Collection from Our Website
        </span>
      </div>
      <Container className="my-5">
        <Row>
          {data.map((d) => {
            return (
              <Col xs={6} sm={6} md={3} lg={4}>
                <div className="flex justify-center items-center relative m-3 ">
                  <img
                    src="https://kidsstalk.in/storage/uploads/product/KTS21969.webp"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.3) 500px 500px inset",
                    }}
                    className="w-full"
                    alt=""
                  ></img>
                  <div className="border border-3 p-5 px-5 text-lg text-white border-double absolute font-bold">
                    Cahin
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CategorySection;
