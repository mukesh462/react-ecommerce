import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/solid";
import { Radio } from "antd";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { PiBankDuotone } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import SuccessModel from "./SuccessModel";
function CheckOut() {
  const [value, setValue] = useState(1);
  const [success, setsuccess] = useState(false)
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const ListItems = () => {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 shadow-sm border-2 rounded-sm my-1">
        <div className="col-start-1 col-end-4">
          <div className="flex justify-between p-2 gap-1">
            <img
              src="https://kidsstalk.in/storage/uploads/product/KTS33336_2.webp"
              alt=""
              className="h-32 mr-2 rounded-md"
            />
            <div className="  ">
              <p className="text-black font-medium text-ellipsis text-xs md:text-base lg:text-base  ">
                Chanderi Silk Abstract Print A-line Sleeve Kurta With Palazzo
                -multicol lorwdwdwdwdwdwd
              </p>
              <p className="py-2  text-xs">
                <span className="font-bold py-2 mr-1">Size :</span>365M
                <div className=" block md:hidden lg:hidden xl:hidden">
                  <div className="font-bold text-base mt-2 ">
                    <p>$ 21545</p>
                    <span className="text-xs text-gray-500 px-1">
                      MPR include all taxes
                    </span>
                  </div>
                  {/* <span className="text-sm text-gray-500 px-1">Tax : $ 42</span> */}
                  {/* <p className="text-sm text-gray-500 px-1">P.Charges : $ 42</p> */}

                  <div className="flex mt-1">
                    <p className="font-bold tracking-wider mt-2 mx-2">Qty</p>
                    <div className="flex justify-evenly items-center">
                      <button className="bg-indigo-500 p-2 rounded-md text-white font-bold">
                        +
                      </button>
                      <p className="px-2">1</p>
                      <button className="bg-indigo-500 p-2 rounded-md text-white font-bold">
                        -
                      </button>
                    </div>

                    <TrashIcon className="h-5 ml-5 text-red-500 mt-2 cursor-pointer" />
                  </div>
                </div>
              </p>
              <div className="border-1 border-b border-dotted"></div>
              <div className="flex items-center pl-2 p-1">
              <CiDeliveryTruck size={25} className="stroke-indigo-500" />
                {/* <TruckIcon className="h-8 text-gray-500" /> */}
                <div class="ml-2 text-xs text-gray-500">
                  {" "}
                  Get it by <b> Saturday, 25 November</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-2 p-2 border-dotted px-3 hidden md:block lg:block xl:block">
          <div className="font-bold text-lg">$ 21545</div>
          {/* <span className="text-sm text-gray-500 px-1">Tax : $ 42</span> */}
          {/* <p className="text-sm text-gray-500 px-1">P.Charges : $ 42</p> */}
          <span className="text-sm text-gray-500 px-1">
            MPR include all taxes
          </span>
          <p className="font-bold tracking-wider">Qty</p>
          <div className="flex mt-1">
            <div className="flex justify-evenly items-center">
              <button className="bg-indigo-500 p-2 rounded-md text-white font-bold">
                +
              </button>
              <p className="px-2">1</p>
              <button className="bg-indigo-500 p-2 rounded-md text-white font-bold">
                -
              </button>
            </div>

            <TrashIcon className="h-5 ml-5 text-red-500 mt-2 cursor-pointer" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="my-5 relative">
      <Container>
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 scroll-m-0 scroll-p-0">
          <div className=" col-start-1 col-end-3 overflow-y-scroll max-h-[600px] no-scrollbar ">
            {[1, 2, 3, 5, 3, 5, 5, 5, 56, 6, 6].map((e) => (
              <ListItems />
            ))}
          </div>
          <div className=" col-span-2">
            <Container className="px-0 md:px-5 lg:px-5">
              <div className="p-2  shadow-sm ">
                {" "}
                <p className="text-lg font-medium">Payment Details</p>{" "}
                <table cellPadding={8} className="my-2  ">
                  <tbody>
                    <tr>
                      <th>Value Of Product(s)</th>
                      <td>:</td>
                      <td>$545456</td>
                    </tr>
                    <tr>
                      <th>Sub Total</th>
                      <td>:</td>
                      <td>$545456</td>
                    </tr>
                    <tr>
                      <th className="text-lg text-black tracking-wider">
                        Grand Total
                      </th>
                      <td></td>
                      <th>$545456</th>
                    </tr>
                  </tbody>
                </table>
                <div className="border-t-2 border-dotted p-2">
                  <div className="my-3">
                    <p className="font-medium text-lg flex items-center gap-2">Select Payment Method <PiBankDuotone /></p>
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      buttonStyle=""
                      className="flex flex-col  radio-custom md:w-[50%] lg:w-[50%]"
                    >
                      <Radio value={1} className="font-bold my-3">
                        {/* COD{" "} */}
                        {/* <span className="text-xs text-gray-500 matter "> */}
                          {" "}
                          Cash On Delivery
                        {/* </span> */}
                      </Radio>
                      <Radio value={2} className="font-bold">
                        Online Payment{" "}
                        <span className="text-[10px] ml-3 text-gray-500">
                          Phonepe Gpay Card etc...
                        </span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="border-t-[3px] border-dotted" />
                <div className="dele border-b-2 border-dotted mb-4">
                  <p className="font-medium text-lg py-3">
                    Delivery Address{" "}
                    <span className="text-xs bg-indigo-500 p-2 rounded-lg text-white cursor-pointer">
                      {" "}
                      Edit{" "}
                    </span>
                  </p>
                  <address className="p-2 relative">
                    No-61, Varsabari Complex, Bypass Rd, Madurai, Tamil Nadu
                    625016
                  </address>
                  {/* <textarea name="" id="" cols="" className="w-full" readOnly disabled rows="5" value={''}> */}
                  {/* </textarea> */}
                </div>
                <div className=" " onClick={()=> setsuccess(!success)}>
                  <button className="bg-indigo-500 w-full md:w-[70%] lg:w-[70%] justify-center px-5 text-white font-bold  p-2 rounded-md flex items-center gap-2">
                    {" "}
                    Order Now <GiShoppingCart />
                  </button>
                </div>
                {/* <div className="flex">
                <p>Grand Total</p>
                <p className="font-bold text-2xl ml-5">$ 256565</p>
              </div> */}
              </div>
            </Container>
          </div>
        </div>
      </Container>
    <SuccessModel state={success}/>
      
    </div>
  );
}

export default CheckOut;
