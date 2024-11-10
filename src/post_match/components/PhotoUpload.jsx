import React from "react";
import { MdCancel } from "react-icons/md";

const PhotoUpload = ({ handleImageUpload, imageUrls, removeImage, errors }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 1 0 5.975 9H6a3 3 0 1 0 0 6h3m4-5v6m2-3h-4"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG (MAX. 800x400px)
            </p>
          </div>
        </label>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/png, image/gif, image/jpg"
          onChange={handleImageUpload}
        />
      </div>

      {/* Preview Uploaded Images */}
      <>
        {imageUrls && imageUrls.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 border p-4 rounded-md bg-gray-100/70">
            {imageUrls.map((url, index) => (
              <div className="relative" key={index}>
                <img
                  src={url}
                  alt={"Uploaded image ${index + 1}"}
                  className="w-full h-32 object-cover rounded"
                />
                <MdCancel
                  className="absolute -top-1 -right-1 size-7 bg-white text-red-700 rounded-full cursor-pointer"
                  onClick={() => removeImage(index)}
                />
              </div>
            ))}
          </div>
        )}
        {errors.images && (
          <p className="mt-1 text-sm text-red-600">{errors.images.message}</p>
        )}
      </>
    </>
  );
};

export default PhotoUpload;
