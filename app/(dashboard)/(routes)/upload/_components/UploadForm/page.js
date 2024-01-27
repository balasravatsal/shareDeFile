import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UploadForm() {
  const [file, setFile] = useState();

  const fileSelected = (file) => {
    if (!file) {
      return;
    }

    if (file.size > 2000000) {
      console.log("File is larger than expected");
      toast.info("File Size should be less than 2MB", {
        position: "top-center",
        autoClose: '5000',
        hideProgressBar: false,
        closeOnClick: "true",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });
    } else {
      setFile(file);
    }
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full mt-20">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-blue-500 dark:text-blue-400"
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
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 md:text-lg text-center text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (Max Size: 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => fileSelected(e.target.files[0])}
          />
        </label>
      </div>
      <button
        disabled={!file}
        className="p-2 bg-blue-600 text-white w-[30%] rounded-full mt-8 disabled:bg-slate-500"
      >
        Upload
      </button>
      
    </div>
  );
}
