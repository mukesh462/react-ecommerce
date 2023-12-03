import { Button, Result } from "antd";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
// import './YourComponent.css'; // Import your stylus or CSS file

const SuccessModel = ({ state }) => {
  const [isSuccess, setIsSuccess] = useState(true);

  const handleButtonClick = () => {
    setIsSuccess(!isSuccess);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        window.location.href = "/myOrders";
      }, 2000);
    }
  }, [state]);

  return (
    <>
      <Modal
        className="flex items-center justify-center h-screen "
        show={state}
        centered
      >
        <Result
          className="bg-white rounded-md"
          status="success"
          title="Order Placed Successfully!"
          subTitle="Thank you for shopping with us. Your order has been successfully placed."
          // extra={[
          //   <Button type="primary" key="home" href="/">
          //     Back to Home
          //   </Button>,
          //   <Button key="track" href='/myOrders'>Track Order</Button>,
          // ]}
        />
      </Modal>
    </>
  );
};

export default SuccessModel;
