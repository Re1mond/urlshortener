import React, { useState } from 'react';

import UrlFormBox from './UrlFormBox';
import { shortenUrl } from '../ApiService';
import ButtonCopy from './ButtonCopy'

const UrlShortenerComponent = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUrlSubmit = async (url) => {
    try {
      setLoading(true);
      const result = await shortenUrl(url);
      setLoading(false);
      setShortUrl(result.shortUrl);
    } catch (error) {
      console.error("Error creating short URL", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <UrlFormBox onSubmit={handleUrlSubmit} />
      {
        !loading ? (
          shortUrl ? (
            <p className="text-lg mt-4 font-mono">
              Short URL:{" "}
              <a href={shortUrl} className="text-indigo-500 underline">
                {shortUrl}
              </a>
              <ButtonCopy textToCopy={shortUrl} />
            </p>
          ) : null
        ) : (
            <div className="animate-spin mt-4 rounded-full border-t-2 border-indigo-500 w-8 h-8"></div>
        )
      }
    </div>
  );
};

export default UrlShortenerComponent;
