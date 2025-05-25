import React from "react";

const MakeInIndia = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      {/* White Labeling Text */}
      <p className="text-[#000000] text-lg sm:text-xl font-semibold mb-4">
        All Products Available for White Labeling
      </p>

      {/* Lion Image */}
      <div className="relative w-[80%] max-w-[500px]">
        <img
          src="/src/assets/lion_svg.jpg" // Update path if needed
          alt="Make in India"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MakeInIndia;
