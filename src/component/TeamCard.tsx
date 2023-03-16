import React from 'react';

interface TeamCardProps {
  img: string;
  name: string;
  title: string;
};

const TeamCard = ({ img, name, title }: TeamCardProps) => (
  <div className="border-2 border-gray flex flex-col items-center gap-2 hover:shadow-2xl">
    <img src={img} alt='' className='h-96 w-72' />
    <div className="py-2">
      <p className='font-bold'>{name}</p>
      <p className='textStyle text-gray-400'>{title}</p>
    </div>
  </div>
);

export default TeamCard;
