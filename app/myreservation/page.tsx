import React from "react";
import Image from "next/image";

const MyReservationPage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 mb-2 text-2xl">My reservations</h1>
      <div className="space-y-4">
        <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                src="/beach_1.jpg"
                alt="beach"
              />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>

            <p className="mb-2">
              <strong>Check in Date:</strong> 14/2/2024
            </p>
            <p className="mb-2">
              <strong>Check out Date:</strong> 16/2/2024
            </p>
            <p className="mb-2">
              <strong>Number of nights:</strong> 2
            </p>
            <p className="mb-2">
              <strong>Total price:</strong> $200
            </p>
            <div className="mt-4 inline-block cursor-pointer py-4 px-6 text-white rounded-xl bg-airbnb hover:bg-airbnbDark transition">
              Go to property
            </div>
          </div>
        </div>
        <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                src="/beach_1.jpg"
                alt="beach"
              />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>

            <p className="mb-2">
              <strong>Check in Date:</strong> 14/2/2024
            </p>
            <p className="mb-2">
              <strong>Check out Date:</strong> 16/2/2024
            </p>
            <p className="mb-2">
              <strong>Number of nights:</strong> 2
            </p>
            <p className="mb-2">
              <strong>Total price:</strong> $200
            </p>
            <div className="mt-4 inline-block cursor-pointer py-4 px-6 text-white rounded-xl bg-airbnb hover:bg-airbnbDark transition">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservationPage;
