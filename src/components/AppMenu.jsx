import { Avatar } from "antd";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { LiaBoxSolid } from "react-icons/lia";
import { RxPerson } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

function AppMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center items-center flex-col p-4">
          <Avatar
            size={130}
            style={{verticalAlign:'middle'}}
            // src={
            //   "https://m.media-amazon.com/images/M/MV5BMTIzZGVhY2ItNzBjNy00ZTQ5LWE4NTYtYzM1ZGU3MzRhNzExXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
            // }
            src={'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='}
            // icon={<RxPerson />}
            alt="Name"
          ></Avatar>
          <p className="font-bold text-xl mt-2 ">Silk</p>
        </div>
        <ListGroup>
          <ListGroup.Item className={`cursor-pointer`}>
            <div
              onClick={() => navigate("/myProfile")}
              className={`flex items-center rounded-md justify-start  ${
                location.pathname == "/myProfile"
                  ? "bg-indigo-600 text-white"
                  : null
              } text-lg font-medium py-2 hover:text-white  text-indigo-600 hover:bg-indigo-500`}
            >
              <RxPerson className="mx-3 " size={"28px"} />
              Profile
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            {" "}
            <div
              onClick={() => navigate("/myOrders")}
              className={`flex items-center rounded-md justify-start  ${
                location.pathname == "/myOrders"
                  ? "bg-indigo-600 text-white"
                  : null
              } text-lg font-medium py-2 hover:text-white  text-indigo-600 hover:bg-indigo-500`}
            >
              <LiaBoxSolid className="mx-3 " size={"28px"} />
              My Orders
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            {" "}
            <div
              onClick={() => navigate("/address")}
              className={`flex items-center rounded-md justify-start  ${
                location.pathname == "/address"
                  ? "bg-indigo-600 text-white"
                  : null
              } text-lg font-medium py-2 hover:text-white  text-indigo-600 hover:bg-indigo-500`}
            >
              <SlLocationPin className="mx-3 " size={"28px"} />
              Address
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="cursor-pointer">
            {" "}
            <div
              className={`flex items-center rounded-md justify-start  text-lg font-medium py-2 hover:text-white  text-indigo-600 hover:bg-indigo-500`}
            >
              <TbLogout2 className="mx-3 " size={"28px"} />
              Logout
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default AppMenu;
