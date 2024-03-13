// Home.js
import React from 'react';
import qrImg from './qr_image.png'

console.log(qrImg)
const Home = () => {
  return <div className='home-section'>
    <div className='home-block'>
      <img src={qrImg} alt='QR CODE' />
    </div>
  </div>;
};

export default Home;
