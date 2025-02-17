import React from 'react';

const Navigation = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page1" className="text-black">Page 1</a>
        <a href="/page2" className="text-black">Page 2</a>
      </div>
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-2xl">Main page here</h1>
        <p className="mt-4">Alejandro Hernández Villaseñor was here</p>
        <button className="mt-4 px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white">
          Click me
        </button>
      </div>
    </div>
  );
};

export default Navigation;