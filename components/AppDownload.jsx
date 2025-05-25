import React from "react";
import { FaApple, FaGooglePlay, FaAmazon } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="text-center py-10 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#041d7f]">
        Get the Deckidz App
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Available on multiple platforms for easy access!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-md transition hover:scale-105"
        >
          <FaApple className="text-xl mr-2" />
          <span>App Store</span>
        </a>

        <a
          href="https://play.google.com/store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition hover:scale-105"
        >
          <FaGooglePlay className="text-xl mr-2" />
          <span>Google Play</span>
        </a>

        <a
          href="https://www.amazon.com/appstore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition hover:scale-105"
        >
          <FaAmazon className="text-xl mr-2" />
          <span>Amazon Appstore</span>
        </a>
      </div>
    </section>
  );
};

export default AppDownload;
