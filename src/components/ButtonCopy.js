import { useState } from "react";

function ButtonCopy({ textToCopy }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 5000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setCopySuccess(false);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="relative group ml-2 p-2 text-indigo-500 hover:text-indigo-700"
      title="Copy to clipboard"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="4" y="4" width="12" height="12" rx="2" ry="2"></rect>
        <rect x="8" y="8" width="12" height="12" rx="2" ry="2"></rect>
        <path d="M14 4h6v6M14 10l6-6"></path>
      </svg>
      {copySuccess && (
        <span className=" text-green-500 text-sm">Copied!</span>
      )}
      <span className="absolute left-0 top-full opacity-0 group-hover:opacity-50 transition-opacity text-sm bg-black text-white p-2 rounded">
        Copy
      </span>
    </button>
  );
}

export default ButtonCopy;
