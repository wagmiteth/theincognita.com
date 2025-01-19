// components/PopupForm.js
import React from "react";
import CTAButton from "./CTAButton";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="popup-form fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-lg z-999" // Increase z-index
      onClick={onClose}
    >
      <div
        className="bg-background p-8 rounded-lg relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <form action="https://submit-form.com/OkZ4UNir" className="space-y-4">
          <h2>Apply to get listed</h2>
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Network State Name*
            </label>
            <input
              type="hidden"
              name="_redirect"
              value="https://theincognita.com/thankyou"
            />
            <input
              type="text"
              id="name"
              name="name"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block font-medium text-gray-700"
            >
              Website*
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="URL"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mission"
              className="block font-medium text-gray-700"
            >
              Mission (Max 80 characters)*
            </label>
            <textarea
              type="text"
              id="mission"
              name="mission"
              maxlength="80"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Mission"
              required="true"
              rows="2"
            />
          </div>
          <div>
            <label htmlFor="X" className="block  font-medium text-gray-700">
              X (Twitter)
            </label>
            <input
              type="text"
              id="X"
              name="X"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="X handle URL"
            />
          </div>
          <div>
            <label
              htmlFor="discord"
              className="block  font-medium text-gray-700"
            >
              Discord
            </label>
            <input
              type="text"
              id="discord"
              name="discord"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Discord URL"
            />
          </div>
          <div>
            <label
              htmlFor="Application link"
              className="block font-medium text-gray-700"
            >
              Application Link*
            </label>
            <input
              type="text"
              id="applicationLink"
              name="applicationLink"
              placeholder="Application URL"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required="true"
            />
          </div>
          <div>
            <label
              htmlFor="Token link"
              className="block font-medium text-gray-700"
            >
              Token or NFT
            </label>
            <input
              type="text"
              id="token"
              name="token"
              placeholder="Link to token or NFT"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="Email" className="block font-medium text-gray-700">
              Email (Internal use only)*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required="true"
            />
          </div>
          <div className="pl-2 mt-1 italic">
            * Required fields, write n/a if not applicable.
          </div>

          {/* Repeat this pattern for each input field */}
          {/* ... */}
          <div className="mt-6 flex justify-center ">
            <a
              href="https://discord.gg/EyvF2fEqWT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CTAButton bgColor="var(--color-white)">
                <h2>Send apllication</h2>
              </CTAButton>
            </a>
          </div>
        </form>
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
