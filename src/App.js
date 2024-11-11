import React from 'react';
import UrlShortenerComponent from './components/UrlShortener';

function App() {
  return (
    <div className='bg-slate-50 min-h-screen' style={{
      backgroundImage: `url("https://images.pexels.com/photos/19670/pexels-photo.jpg")`
    }}>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-6">Reis URL Shortener</h1>
        <UrlShortenerComponent />
      </div>
    </div>
  );
} // https://images.pexels.com/photos/19670/pexels-photo.jpg

export default App;
