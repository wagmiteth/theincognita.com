// components/PopupForm.js
import React from "react";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="popup-form fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-lg z-999"
      onClick={onClose}
    >
      <div
        className="bg-background p-8 rounded-lg relative max-w-lg w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Get Listed</h2>
        <p className="mt-4 mb-8">
          To get your Network State listed on The Incognita, please join our
          Discord community and share your information with us there! 👋
        </p>
        <div className="flex justify-center">
          <a
            href="https://discord.gg/EyvF2fEqWT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-black px-4 py-2 border-[2.5px] rounded-md 
              transition-transform transition-shadow duration-200 
              transform hover:translate-x-0.5 hover:translate-y-0.5
              shadow-custom hover:shadow-hover"
            >
              <h2>Join Our Discord</h2>
            </button>
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-black bg-transparent text-xl leading-none hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
