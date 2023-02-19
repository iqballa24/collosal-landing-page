import React from 'react';

const Clock = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9998 45.8334C36.5058 45.8334 45.8332 36.506 45.8332 25.0001C45.8332 13.4941 36.5058 4.16675 24.9998 4.16675C13.4939 4.16675 4.1665 13.4941 4.1665 25.0001C4.1665 36.506 13.4939 45.8334 24.9998 45.8334Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 12.5V25L33.3333 29.1667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clock;