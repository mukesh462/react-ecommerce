import React, { useState } from 'react';
// import './ReadMoreText.css'; // Create this file for Tailwind CSS styles

const TextRender = ({ text, maxChars }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-md">
    <p className={`overflow-hidden ${showMore ? '' : 'line-clamp-3'}`}>
      {text}
    </p>
    {text.length > maxChars && (
      <button
        className="text-blue-500"
        onClick={toggleShowMore}
      >
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    )}
  </div>
  );
};

export default TextRender;
