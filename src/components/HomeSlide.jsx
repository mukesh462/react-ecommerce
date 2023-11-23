import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '100vh',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const HomeSlide = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} >
      <div>
       <img src='https://kidsstalk.in/storage/uploads/ThemePage/vwRy7NF6HcaJWVkagZXKzWDl1eWaMQAMmfNDw5jy.webp'/>
      </div>
      <div>
        <img src="https://kidsstalk.in/storage/uploads/ThemePage/xOy6xZYDQbdbmytyKpiQB3kzwm5klILlEXn1QGYf.webp" alt="" srcset="" />
      </div>
      {/* <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  );
};
export default HomeSlide;