import React from 'react';
import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page1" className="text-black">Page 1</a>
        <a href="/page2" className="text-black">Page 2</a>
      </div>
      <div className="flex-1 flex items-center justify-center text-2xl">
        En Construcción
      </div>
    </div>
  );
};

export default Navigation;