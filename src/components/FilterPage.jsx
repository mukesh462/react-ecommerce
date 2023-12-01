import React, { Fragment, useState } from "react";
import { Colors } from "../Config";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Checkbox } from "antd";
import "../App.css";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import ProductCard from "./ProductCard";
import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
function FilterPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cate = ["Ring", "Cate", "dog", "MAid"];
  const pro = [
    1, 1, 2, 2, 54, 2, 55, 14564, 4, 346, 46, 4694, 64, 956, 9, 4, 4, 9,
  ];
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="toper flex-row flex justify-center items-center my-16">
        <div
          className=" mr-8 sm:block md:block lg:hidden xl:hidden"
          variant="primary"
          onClick={handleShow}
        >
          <SquaresPlusIcon className="h-8" />
        </div>

        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search Product......"
            className="w-full sm:px-28 md:px-28 lg:px-28  p-2  py-2 bg-indigo-400 rounded-lg text-white placeholder-gray-50 placeholder:p-2"
          />
          <button className="ml-5 flex flex-row justify-center items-center ">
            <MagnifyingGlassIcon
              className="h-10 w-10 "
              aria-hidden="true"
              style={{ color: Colors.main }}
              onClick={() => navigate("/checkout")}
            />
            <span className="text-black font-bold hidden md:block lg:block xl:block">
              Search
            </span>
          </button>
        </div>
      </div>
      <div className="">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          className=" overflow-y-scroll"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title className="flex justify-between w-full">
              Filter{" "}
              <XCircleIcon
                onClick={handleClose}
                className="h-8 text-black font-bold"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <h1 className="font-bold text-2xl px-2 py-3">Category</h1>
              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
              <h1 className="font-bold text-2xl px-2 py-3">Price Range</h1>

              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="p-2 rounded-md bg-indigo-500 text-white"
              onClick={handleClose}
            >
              Apply filter
            </button>
            {/* <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </Modal>
      </div>

      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12  rounded-lg border-t-2">
        <div className=" col-start-1 col-end-3 hidden sm:hidden md:hidden lg:block xl:block ">
          <div className="list border-r-2 min-h-screen ">
            <Container>
              <h1 className="font-bold text-2xl px-2 py-3">Category</h1>
              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
              <h1 className="font-bold text-2xl px-2 py-3">Price Range</h1>

              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
            </Container>
          </div>
        </div>
        <div className=" col-span-10 flex justify-center ">
          <>
            {/* 
               <Row className="flex justify-center items-center ">
            {pro.map((e) => {
              return ( */}
            {/* // <Col xs={6} sm={6} md={4} lg={3}> */}
            <div className="grid grid-cols-2 md:grid-cols-3 px- lg:grid-cols-4">
              {pro.map(() => {
                return <ProductCard cardName=" m-2 p-1" click={()=> navigate('/view')}/>;
              })}
            </div>
            {/* // </Col> */}
            {/* );
            })}
          </Row> */}
          </>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
