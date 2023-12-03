import React from "react";
import { BiMapPin } from "react-icons/bi";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container } from "react-bootstrap";
function OrderView() {
  const steps = [
    "Order placed",
    "In Progress",
    "Ready to Shipment",
    "Delivered",
  ];

  const description = "You can hover on the dot.";

  const ListCard = () => {
    return (
      <div className="border p-1 my-1">
        <div className="flex ">
          <img
            src="https://kidsstalk.in/storage/uploads/product/KTS31905.webp"
            alt=""
            className="h-[150px]"
          />
          <div className="p-2 pl-3 text-responsive space-y-1">
            <div className="text-ellipsis mb-1 ">
              Cotton Floral Printed A-line Gathered Half Sleeve Frock -
              Turquoise{" "}
            </div>
            <div className="">
              <strong>Size:</strong> 2xl
            </div>
            <div className="">
              <strong>Color:</strong> Red
            </div>
            <div className="">
              <strong>Qty:</strong> 1 Nos
            </div>
            <div className="text-end font-medium">$4545</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-[60vh]">
      <div className="">
        <div className="p-2 text-center flex justify-center items-center text-2xl bg-indigo-600 text-white my-3">
          <BiMapPin size={35} className="mr-3" /> Track Your  Order
        </div>
      </div>
      <div className="my-10 border-b pb-10">
        <Box sx={{ width: "100%" }} className>
          <Stepper activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-10">
          <div className="col-span-4">
            <h1 className="text-black font-bold text-xl uppercase my-3">
              Order Information
            </h1>
            <div className="p-3 shadow-md  overflow-y-scroll max-h-[600px] no-scrollbar ">
              {[1, 2, 3, 4, 2, 4].map((e) => (
                <ListCard />
              ))}
            </div>
          </div>
          <div className=" col-span-2 mt-4">
            <h1 className="text-black font-bold text-xl uppercase my-3">
              Payment Details
            </h1>
            <hr className=""></hr>
            <div className="border-b ">
              <table cellPadding={10} className="border-b-2 w-full">
                <tr>
                  <td className="font-medium" >Order ID</td>
                  <td align="right">#5456sdf</td>
                </tr>
                <tr>
                  <td className="font-medium">Order Time</td>
                  <td align="right">12-02-2023 10:50</td>
                </tr>
                <tr>
                  <td className="font-medium">Payment Type</td>
                  <td align="right" >03-02-2012 10:10</td>
                </tr>
                <tr className="">
                  <td className="font-medium">Payment time</td>
                  <td  align="right">02-12-2023 10:45</td>
                </tr>
              </table>
              <table cellPadding={10} className="border-b-2 w-full">
                <tr>
                  <td className="font-medium">Product Total (5)</td>
                  <td align="right">$ 5656</td>
                </tr>
                <tr>
                  <td className="font-medium">Shipping To</td>
                  <td align="right"> Delhi </td>
                </tr>
              </table>
              <table cellPadding={10} className="border-b-2 w-full ">
                <tr>
                  <td className="font-medium">Shopping Total Cost (5)</td>
                  <td align="right">$ 5656</td>
                </tr>
                <tr>
                  <td className="font-medium">Delivery Charges</td>
                  <td align="right"> $ 45454 </td>
                </tr>
              </table>
              <table cellPadding={10} className="w-full">
                <tr>
                    <td className="font-medium">Order Total</td>
                    <td align="right" className="text-lg font-bold">$ 454542</td>
                </tr>
              </table>
            </div>
            <div className="p-2 my-3 ">
            <p className="font-bold my-2">Delivery Address :</p>
            <div className="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto atque vero neque, est minima commodi quis vitae explicabo eius necessitatibus. Maiores dolore facilis alias ex harum ea doloribus a.</div>
          </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
}

export default OrderView;
