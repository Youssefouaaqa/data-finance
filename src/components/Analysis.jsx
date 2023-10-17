import React from 'react';
import laptop from '../assets/laptop.jpg';

const Analysis = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ab
            blanditiis magnam eveniet quo assumenda, modi libero temporibus qui
            nam pariatur, excepturi aliquam. Vitae ad enim quo velit adipisci
            itaque?
          </p>
          <button className="bg-[#000300] text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analysis