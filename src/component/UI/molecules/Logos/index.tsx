import React from 'react';

const Logos: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-11 border-t border-b border-white/10 w-full py-[33px] px-32 bg-transparent">
      {data.map((logo, index) => (
        <img key={index} src={logo} alt="" />
      ))}
    </div>
  );
};

export default Logos;
