import React, { useState, useEffect } from 'react';

const IconLoader = () => {
  const [showAlpha, setShowAlpha] = useState(false);

  useEffect(() => {
    const hexagonTimer = setTimeout(() => {
      setShowAlpha(true);
    }, 2000); // Increased delay for α appearance after hexagon completion

    return () => clearTimeout(hexagonTimer);
  }, []);

  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Loader Logo</title>
      <g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
        {showAlpha && (
          <text
            x="50%"
            y="48%"
            fontSize="48"
            fill="currentColor"
            fontFamily="Arial, sans-serif"
            fontWeight="normal"
            textAnchor="middle"
            dominantBaseline="middle">
            α
          </text>
        )}
      </g>
    </svg>
  );
};

export default IconLoader;
