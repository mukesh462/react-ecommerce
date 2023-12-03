import React, { Fragment, useEffect, useState } from "react";
import { Colors } from "../Config";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Checkbox, Radio } from "antd";
import "../App.css";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import ProductCard from "./ProductCard";
import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function FilterPage() {
  const [localClick, setlocalClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setlocalClick(!localClick);
    }, 3000);
  },[])
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
      <div className="toper  my-16">
        <div className=" flex justify-center">
          <div
            className=" mr-8 sm:block md:block lg:hidden xl:hidden"
            variant="primary"
            onClick={handleShow}
          >
            <SquaresPlusIcon className="h-8" />
          </div>
          <input
            type="text"
            placeholder="Search Product......"
            className=" relative md:w-[350px] p-2 lg:w-[550px]  py-2 bg-indigo-400 rounded-lg focus:outline-indigo-600 text-white placeholder-gray-50 placeholder:p-2"
          />
          <button className="   top-0 right-0  ">
            <MagnifyingGlassIcon
              className="h-10 w-10 ml-2 "
              aria-hidden="true"
              style={{ color: Colors.main }}
              onClick={() => navigate("/checkout")}
            />
            {/* <span className="text-black font-bold hidden md:block lg:block xl:block">
              Search
            </span> */}
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
              <h1 className="font-medium text-2xl px-2 py-3">Category</h1>
              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
              <h1 className="font-thin text-2xl px-2 py-3">Price Range</h1>
              {cate.map((e) => {
                return (
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Checkbox className="my-checkbox">{e}</Checkbox>
                  </div>
                );
              })}
              <h1 className="font-thin text-2xl px-2 py-3">Sort</h1>
              <Radio.Group class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <Radio className="my-checkbox" value={1}>High to Low</Radio>

                <Radio value={2} className="my-checkbox">Low to High</Radio>
              </Radio.Group>
            </Container>
          </div>
        </div>
        <div className=" col-span-10 flex justify-center ">
          <>
          {/* <Skeleton  className="" /> */}
            <div className="grid grid-cols-2 md:grid-cols-3 px- lg:grid-cols-4">

              { localClick ? [1,2,3,4,5,6,7,8,9].map((d)=> {
                return (
                  <Skeleton  className="h-[250px] w-[200px]" />
                )
              }):
              pro.map(() => {
                return (
                  <ProductCard
                    cardName=" m-2 p-1"
                    click={() => navigate("/view")}
                  />
                );
              })}
            </div>
        
          </>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
