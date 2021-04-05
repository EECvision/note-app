import React from 'react';

const Warn = ({ clickHandler, error, warn }) => {
  return (
    <div style={{ background: 'rgb(0,0,0,0.05)' }} className="w-screen h-screen z-50 absolute top-0 left-0 flex items-start justify-center p-2">
      <div className="w-full max-w-sm flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
        <div className="w-full text-left text-lg text-orange-500 font-serif mb-8">
          {error}{warn}
        </div>
        <div className="w-full flex items-center justify-end">
          <div onClick={clickHandler} className="w-auto px-6 py-1 rounded bg-red-600 text-white text-sm font-medium cursor-pointer">ok</div>
        </div>
      </div>
    </div>
  )
}

export default Warn;