import React from 'react';
import sidhikImage from '@/assets/Sidhik.png';
import resumePdf from '@/assets/Sidhik_Thorat_Resume.pdf';

const AssetTest = () => {
  const testImage = () => {
    console.log('Testing imported image:', sidhikImage);
    const img = new Image();
    img.onload = () => console.log('Image loaded successfully:', img.src);
    img.onerror = () => console.error('Image failed to load:', img.src);
    img.src = sidhikImage;
  };

  const testResume = () => {
    console.log('Testing imported resume:', resumePdf);
    fetch(resumePdf)
      .then(response => {
        console.log('Resume response:', response.status, response.headers.get('content-type'));
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Resume not found');
      })
      .then(blob => {
        console.log('Resume loaded successfully, size:', blob.size);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sidhik_Thorat_Resume.pdf';
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Resume download failed:', error);
      });
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-black text-white p-4 rounded">
      <h3>Asset Test</h3>
      <button onClick={testImage} className="block mb-2 px-2 py-1 bg-blue-500 rounded">
        Test Image
      </button>
      <button onClick={testResume} className="block px-2 py-1 bg-green-500 rounded">
        Test Resume
      </button>
    </div>
  );
};

export default AssetTest;
