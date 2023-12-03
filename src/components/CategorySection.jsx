import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Colors } from "../Config";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CategorySection() {
  const data = [21, 2, 54, 5, 1, 5];
  const load = [1, 2, 3, 4, 5, 6, 7, 8];
  const [localClick, setlocalClick] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setlocalClick(!localClick);
    }, 3000);
  }, []);

  return (
    <div className="">
      <div
        className="head  text-center py-3 "
        style={{ background: Colors.main, color: Colors.text }}
      >
        <h3 className="font-bold text-white ">Shop By Categoies</h3>

        <span className="text-white" onClick={() => setlocalClick(!localClick)}>
          {" "}
          Shop all Collection from Our Website
        </span>
      </div>
      <Container className="my-5">
        <Row>
          {localClick
            ? load.map((d) => {
                return (
                  <Col xs={6} sm={6} md={4} lg={3} className="mb-2">
                    <Skeleton className="h-[250px] w-[200px]" />
                  </Col>
                );
              })
            : data.map((d) => {
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
