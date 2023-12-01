import React from "react";
import AppMenu from "./AppMenu";
import { Col, Container, Row } from "react-bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Orders() {
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

            <div className=" m-2">
              <Container className="flex justify-between">
                <img
                  src="https://kidsstalk.in/storage/uploads/product/KTS33336.webp"
                  className="h-[250px]"
                ></img>

                <div className="">
                  <div className="flex">
                    <strong>Estimate :</strong>
                    <p>24 Dec 2023</p>
                  </div>
                </div>

                <button>gsdgsdg</button>
              </Container>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Orders;
