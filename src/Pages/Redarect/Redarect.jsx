import React, { useEffect } from 'react';

const Redirect = () => {
  const targetUrl = 'https://www.shahedahmed.tech/'; // Replace with your actual target URL

  useEffect(() => {
    
      window.location.href = targetUrl;
   

    
  }, []);

  const handleButtonClick = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-lg font-medium mb-2">Redirecting you to the site...</p>
        <p className="text-gray-600 mb-4">If you are not redirected automatically, click the button below:</p>
        <button 
          onClick={handleButtonClick} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Site
        </button>
      </div>
    </div>
  );
};

export default Redirect;
