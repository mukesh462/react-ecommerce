import React from "react";
import { Container } from "react-bootstrap";
import AppMenu from "./AppMenu";
import { BsBoxSeam } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";

function Address() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Container className="mt-8 min-h-[100vh] shadow-sm">
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 rounded-md">
        <div className="hidden lg:block">
          <AppMenu></AppMenu>
        </div>
        <div className=" col-span-3">
          <Container>
            <Container>
              <div className="text-center font-bold text-2xl bg-indigo-600 text-white py-3 rounded-md flex justify-center">
                <SlLocationPin className="mx-3 " size={"38px"} /> My Address
              </div>
            </Container>
            <Container className="mt-3 max-w-[550px] ">
              <label htmlFor="state" className="font-bold text-black">
                Select State
              </label>
              <Select
                id="state"
                className="mt-2 h-14 text-2xl"
                defaultValue="TamilNadu"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Tamil Nadu",
                    label: "Tamil Nadu",
                  },
                  {
                    value: "Kerala",
                    label: "Kerala",
                  },
                  {
                    value: "Delhi",
                    label: "Delhi",
                  },
                ]}
              />

              {/* <div className="py-4"> */}
              <label htmlFor="add" className="font-bold text-black py-2">
                Address
              </label>

              <TextArea
                rows={4}
                id="add"
                placeholder="Enter Your Address"
                size="middle"
                cols="10"
              />
              <div className="flex justify-center mt-5">
                <button className="bg-indigo-600 text-white px-5 p-2 rounded-md">
                  Update Address
                </button>
              </div>
            </Container>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Address;
