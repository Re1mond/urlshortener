import React, { useState } from 'react';

function UrlFormBox({ onSubmit }) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter long URL"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
            >
                shorten
            </button>
            <div className="max-w-[350px] text-xs py-2 break-words">
                {url}
            </div>
        </form>
    );
}

export default UrlFormBox;
