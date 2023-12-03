import React from "react";
import AppMenu from "./AppMenu";
import { Col, Container, Row } from "react-bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  return (
    <Container className="mt-5 min-h-[60vh] shadow-sm">
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 rounded-md">
        <div className="hidden lg:block">
          <AppMenu></AppMenu>
        </div>
        <div className=" col-span-3">
          <Container>
            <Container>
              <div className="text-center font-bold text-2xl bg-indigo-500 text-white py-3 rounded-md flex justify-center">
                <BsBoxSeam className="mx-3 " size={"38px"} /> My Orders
              </div>
            </Container>

            <div className="m-2  overflow-y-scroll max-h-[800px] no-scrollbar ">
              {[1, 2, 3, 4, 5, 4].map((e) => {
                return (
                  <Container className=" items-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-1 rounded-md mb-2 ">
                    <div className="">
                      <img
                        src="https://kidsstalk.in/storage/uploads/product/KTS33336.webp"
                        className="h-[80px]"
                      ></img>
                    </div>
                    {/* <div className="flex justify-center text-sm"> */}
                    <div className="md:flex hidden justify-center items-center  flex-col">
                      <strong className=" ">Order ID</strong>
                      <div className="">#ORD454</div>
                    </div>
                    <div className="flex justify-center items-center  flex-col text-responsive">
                      <strong className=""> Status</strong>
                      <div className=" text-orange-400 font-bold">Pending</div>
                    </div>
                    <div className="lg:flex hidden justify-center items-center  flex-col  ">
                      <strong className="">Total</strong>
                      <div className="">$ 45414</div>
                    </div>
                    <div className="text-responsive">
                      <button
                        className=" rounded-md px-3 p-1 bg-indigo-600 text-white"
                        onClick={() => navigate("/orderView")}
                      >
                        View Order
                      </button>
                    </div>
                    {/* </div> */}
                  </Container>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Orders;
