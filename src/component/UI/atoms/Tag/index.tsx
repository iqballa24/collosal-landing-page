import React from 'react';

const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="w-fit bg-white hover:bg-primary bg-opacity-5 text-sm border border-white border-opacity-10 py-[7px] px-[29px] rounded-full text-white font-medium transition">
      {text}
    </div>
  );
};

export default Tag;
