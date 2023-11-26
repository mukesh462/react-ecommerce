import React from "react";
import AppMenu from "./AppMenu";
import { Container } from "react-bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Orders() {
  return (
    <Container className="mt-4 min-h-[60vh] shadow-sm">
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 rounded-md">
        <div className="hidden lg:block">
          <AppMenu></AppMenu>
        </div>
        <div className=" col-span-3">
          <Container>
            <div className="text-center font-bold text-2xl bg-indigo-500 text-white py-3 rounded-md flex justify-center">
              {" "}
              <BsBoxSeam className="mx-3 " size={"38px"} /> My Orders
            </div>

            <div className="">
              <div className="border-1">
                <div className="flex justify-between items-center px-2 py-3 ">
                  <div className="1">
                    Estimate Delivery : <br /> 24 Dec 2023
                  </div>
                  <div className="">
                    {" "}
                    Order No :<br /> 15452445
                  </div>
                  <div className="">
                    {" "}
                    Order Date : <br /> 12-56-2023
                  </div>
                </div>
                <div className="flex flex-col border-t-[2px] ">
                  <Disclosure>
                    {({ open }) => (
                      /* Use the `open` state to conditionally change the direction of an icon. */
                      <>
                        <Disclosure.Button
                          className={
                            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  justify-between items-center px-2 p-2"
                          }
                        >
                          <img
                            src="https://kidsstalk.in/storage/uploads/product/KTS33298.webp"
                            className="h-[150px] border-2 shadow-sm rounded-md"
                            alt=""
                          />
                          <div className="ml-3 hidden md:block lg:block">
                            Order Stauts:{" "}
                            <span className="text-bold text-green-600">
                              Delivered
                            </span>
                          </div>

                          <div className="view flex bg-indigo-500 text-white px-3 gap-0 rounded-md p-1 justify-between items-center md:w-[60%] lg:w-[60%] w-full ">
                            View details{" "}
                            <ChevronRightIcon
                              className={`h-8 ${
                                open ? "rotate-90 transform " : ""
                              }`}
                            />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>No</Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Orders;
