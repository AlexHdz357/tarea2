import React from 'react';
import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page1" className="text-black">Page 1</a>
        <a href="/page2" className="text-black">Page 2</a>
      </div>
      <div className="p-4 flex flex-col items-center gap-8">
        <h1 className="text-2xl">Products</h1>
        
        <div className="flex items-center gap-4">
          <Image
            src="/flowerboy.png"
            alt="Flowerboy"
            width={100}
            height={60}
          />
          <p>This is the first product </p>
        </div>

        <div className="flex items-center gap-4">

          <p>This is the second product</p>
          <Image
            src="/igor.png"
            alt="Igor"
            width={100}
            height={60}
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/chromakopia.png"
            alt="Chromakopia"
            width={100}
            height={60}
          />
          <p>This is the third product</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;