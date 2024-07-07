import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
const colors = [
  { name: 'custom-100', hex: '#e8e8e9', label: 'Custom 100' },
  { name: 'custom-200', hex: '#d2d2d2', label: 'Custom 200' },
  { name: 'custom-300', hex: '#bbbbbc', label: 'Custom 300' },
  { name: 'custom-400', hex: '#8e8e8f', label: 'Custom 400' },
  { name: 'custom-500', hex: '#777778', label: 'Custom 500' },
  { name: 'custom-600', hex: '#49494b', label: 'Custom 600' },
  { name: 'custom-700', hex: '#333335', label: 'Custom 700' },
  { name: 'custom-800', hex: '#19191b', label: 'Custom 800' },
  { name: 'custom-900', hex: '#000000', label: 'Custom 900' },
  { name: 'brown-100', hex: '#F2ECEB', label: 'Brown 100' },
  { name: 'brown-200', hex: '#DFD4D1', label: 'Brown 200' },
  { name: 'brown-300', hex: '#CCBDB7', label: 'Brown 300' },
  { name: 'brown-400', hex: '#B8A69D', label: 'Brown 400' },
  { name: 'brown-500', hex: '#A48F83', label: 'Brown 500' },
  { name: 'brown-600', hex: '#90786A', label: 'Brown 600' },
  { name: 'brown-700', hex: '#7C6150', label: 'Brown 700' },
  { name: 'brown-800', hex: '#6F594F', label: 'Brown 800' },
  { name: 'brown-900', hex: '#56443C', label: 'Brown 900' },
];

const ColorGrid = () => {
  const [copiedColor, setCopiedColor] = useState('');

  const handleColorClick = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
  };






  const cld = new Cloudinary({ cloud: { cloudName: 'dmcmxmqpw' } });
 
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
  
  <div>
    
    <img src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/snpo67xklz3xfyshvfy4" alt="" />
    <AdvancedImage cldImg={img}/>;
  </div>
  
  
  )
 



  
  // return (
    // <div className="p-4">
    //   <h2 className="syne text-3xl font-bold mb-4">Custom Colors</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //     {colors.map((color) => (
    //       <div
    //         key={color.name}
    //         className={`p-4 rounded-lg text-white cursor-pointer`}
    //         style={{ backgroundColor: color.hex }}
    //         onClick={() => handleColorClick(color.hex)}
    //       >
    //         <div className="h-24 w-full rounded" style={{ backgroundColor: color.hex }}></div>
    //         <p className="mt-2 text-center font-bold">{color.label}</p>
    //         <p className="mt-1 text-center">{color.name}</p>
    //         <p className="mt-1 text-center">{color.hex}</p>
    //       </div>
    //     ))}
    //   </div>
    //   {copiedColor && (
    //     <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
    //       Copied {copiedColor} to clipboard!
    //     </div>
    //   )}
    // </div>
  // );
};

export default ColorGrid;
