import React, { useState } from "react";

const ProductPage = () => {
  // State for hover effect on both videos
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="bg-white px-4 py-10 flex flex-col items-center">
      {/* Product Tour Heading */}
      <div className="relative w-full flex justify-center mb-6">
        <div className="bg-[#1B4B5A] text-white text-center text-3xl md:text-4xl font-bold py-3 px-10 rounded-lg shadow-lg relative">
          Product Tour
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1B4B5A] rotate-45"></div>
          {/* Subheading */}
          <div className="mt-6 bg-red-500 text-white text-lg font-semibold px-6 py-2 rounded-lg shadow-lg border-2 border-gray-200 relative">
            AR Animal Games Function
            {/* Bolt Style Pins */}
            <div className="absolute left-2 top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="absolute right-2 top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1B4B5A] rotate-45"></div>
        </div>
      </div>

      {/* Main Content - Video & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
        {/* Left - Videos */}
        <div className="flex flex-col items-center">
          {/* Main Video */}
          <div className="w-full max-w-3xl relative">
            <video
              className="w-full rounded-lg shadow-lg border-4 border-purple-700"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/src/assets/mainVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Two Sub-Videos */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* First Video with Hover Effect */}
            <div
              className="relative w-full rounded-lg shadow-md border-4 border-blue-500 transform hover:scale-105 transition duration-300"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              {isHovered1 ? (
                <video
                  className="w-full rounded-lg"
                  autoPlay
                  loop
                  muted
                >
                  <source src="/src/assets/subVideo1.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/src/assets/subVideo1.png"
                  alt="Thumbnail 1"
                  className="w-full rounded-lg"
                />
              )}
            </div>

            {/* Second Video with Hover Effect */}
            <div
              className="relative w-full rounded-lg shadow-md border-4 border-green-500 transform hover:scale-105 transition duration-300"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              {isHovered2 ? (
                <video
                  className="w-full rounded-lg"
                  autoPlay
                  loop
                  muted
                >
                  <source src="/src/assets/subVideo2.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/src/assets/subVideo2.png"
                  alt="Thumbnail 2"
                  className="w-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col">
          {/* Small Supporting Image */}
          <div className="mb-6">
            <img
              src="/src/assets/productTour1.jpg"
              alt="Product"
              className="w-3/4 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Information */}
          <h3 className="text-2xl font-semibold text-[#1B4B5A]">
            Augmented Reality Puzzle Cards
          </h3>
          <p className="text-gray-600 mt-3">
            Augmented Reality (AR) enhances learning with engaging and
            interactive experiences. <strong>AR Puzzle Cards</strong> help
            children learn by displaying digital 3D models that match real-world
            puzzle pieces.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700">
              ✔ Fun and interactive way to learn
            </li>
            <li className="text-gray-700">✔ Boosts creativity and retention</li>
            <li className="text-gray-700">✔ Perfect for all age groups</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-[#0077B6] text-white font-semibold rounded-lg shadow hover:bg-[#005f91] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
