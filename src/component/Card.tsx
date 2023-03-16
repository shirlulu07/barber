import React from 'react';

interface CardProps {
  Img: string;
  Cut: string;
}

const Card = ({ Img, Cut }: CardProps) => (
    <div className="border-2 border-gray flex flex-col items-center gap-2 hover:shadow-2xl">
      <img src={Img} alt='' className='h-64 w-80' />
      <div className="flex flex-col gap-2 items-center pb-2 w-72">
        <p className="textStyle font-bold">{Cut}</p>
        <p className='textStyle text-gray-400'>Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua</p>
        <button type="button" className="text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400 hover:border-yellow-400">READ MORE</button>
      </div>
    </div>
  );

export default Card;
