import React from "react";
import AppMenu from "./AppMenu";
import { Container } from "react-bootstrap";
import { Avatar, Space } from "antd";
import { CiCamera } from "react-icons/ci";
function MyProfile() {
  const InputBox = ({
    lable,
    type = "text",
    place,
    read = false,
    value = "",
  }) => {
    return (
      <div className="w-full my-2 py-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {lable}
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            defaultValue={value}
            disabled={read}
            type={type}
            autoComplete="email"
            placeholder={place}
            // required
        
            className="block w-full rounded-md p-2 border-indigo-500 border-2 py-1.5 focus:outline-indigo-500 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:border-indigo-500  focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };
  return (
    <Container className="mt-4 min-h-[60vh] shadow-sm">
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 rounded-md">
        <div className="hidden lg:block">

        <AppMenu></AppMenu>
        </div>
        <div className=" col-span-3">
          <Container className="flex max-w-[550px]  items-center border-1">
            <div className="p-2 w-full">
              <div className="profile relative flex justify-center">
                <Avatar
                  size={130}
                  src={
                    "https://m.media-amazon.com/images/M/MV5BMTIzZGVhY2ItNzBjNy00ZTQ5LWE4NTYtYzM1ZGU3MzRhNzExXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
                  }
                />
                <div className="bg-indigo-500 p-1 w-min rounded-full absolute right-48 bottom-2 cursor-pointer">
                  <CiCamera className="" size={"28px"} color="#fff" />
                </div>
              </div>
              <InputBox lable={"Full Name"} place={"Enter You Name"} />
              <InputBox
                lable={"Email"}
                place={"Enter You Name"}
                value="slik@gmail.com"
                read={true}
              />
              <InputBox lable={"Password"} place={"Enter You Name"} />

              <button className="px-5 bg-indigo-500 text-white rounded-md p-2 float-right my-2">Update Profile</button>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default MyProfile;
