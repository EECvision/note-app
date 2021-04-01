import React from 'react';

const AppDescription = () => {
  return (
    <div className="w-full flex justify-center items-center mt-12 px-4 sm:px-24 2xl:px-0 py-12">
      <div className="w-full max-w-screen-lg flex flex-col justify-center items-center">
        <div className="w-full bg-gray-800 text-white text-xl md:text-3xl font-serif mb-4 md:mb-12 rounded-t p-2 capitalize">
          Enjoy your app while it is:
        </div>
        <div className="w-full flex flex-wrap justify-between items-center">
          <div className="w-full h-56 md:max-w-lg xl:max-w-xs flex flex-col items-center justify-center border border-gray-300 rounded p-4 mb-4">
            <div className="w-full flex items-end justify-start mb-4">
              <i className="w-16 h-16 flex items-end justify-center text-4xl text-red-900 px-4 fas fa-snowboarding"></i>
              <div className="w-auto text-3xl text-red-600 font-medium border-l-4 border-gray-800">Easy to use</div>
            </div>
            <div className="w-full text-left text-lg ">Simply register to start using the app. No other configurations needed.</div>
          </div>
          <div className="w-full h-56 md:max-w-lg xl:max-w-xs flex flex-col items-center justify-center border border-gray-300 rounded p-4 mb-4">
            <div className="w-full flex items-end justify-start mb-4">
              <i className="w-16 h-16 flex items-end justify-center text-4xl text-red-900 px-4 fas fa-bolt"></i>
              <div className="w-auto text-3xl text-red-600 font-medium border-l-4 border-gray-800">Fast</div>
            </div>
            <div className="w-full text-left text-lg ">Note-on is optimized to give you nice experience and great performance.</div>
          </div>
          <div className="w-full h-56 md:max-w-lg xl:max-w-xs flex flex-col items-center justify-center border border-gray-300 rounded p-4 mb-4">
            <div className="w-full flex items-end justify-start mb-4">
              <i className="w-16 h-16 flex items-end justify-center text-4xl text-red-900 px-4 fas fa-user-shield"></i>
              <div className="w-auto text-3xl text-red-600 font-medium border-l-4 border-gray-800">Secure</div>
            </div>
            <div className="w-full text-left text-lg ">Keep your data without any doubts. We are very strict when it comes to ensuring the safety of your data.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDescription;