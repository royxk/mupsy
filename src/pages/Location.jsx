import React from "react";

const Location = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">위치.</h2>

      {/* Location 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-pink-400 mb-2">
          MUPSY 서면 본점
        </h3>
        <p className="text-gray-700 mb-4">
          Our main office located in the heart of the city.
        </p>
        <div className="flex flex-col tab:flex-row items-center">
          <div className="tab:w-1/2 mb-4 tab:mb-0 tab:pr-4">
            <h4 className="font-semibold text-gray-800">Address:</h4>
            <p className="text-gray-600">123 Main Street, City, Country</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: location1@example.com</p>
          </div>
          <div className="tab:w-1/2">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Location 1"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Location 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-pink-400 mb-2">MUPSY 홍대점</h3>
        <p className="text-gray-700 mb-4">
          Our second office located in the suburbs.
        </p>
        <div className="flex flex-col tab:flex-row items-center">
          <div className="tab:w-1/2 mb-4 tab:mb-0 tab:pr-4">
            <h4 className="font-semibold text-gray-800">Address:</h4>
            <p className="text-gray-600">456 Suburb Lane, Suburb, Country</p>
            <p className="text-gray-600">Phone: (987) 654-3210</p>
            <p className="text-gray-600">Email: location2@example.com</p>
          </div>
          <div className="tab:w-1/2">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Location 2"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
