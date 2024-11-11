import React from 'react';
import UrlShortenerComponent from './components/UrlShortener';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RedirectPage from './RedirectPage'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:code" element={<RedirectPage />} />
        </Routes>
      </Router>
      <div className='bg-slate-50 min-h-screen' style={{
        backgroundImage: `url("https://images.pexels.com/photos/19670/pexels-photo.jpg")`
      }}>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl font-bold mb-6">Reis URL Shortener</h1>
          <UrlShortenerComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
