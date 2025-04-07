// src/components/LottieWrapper.js
import React, { useEffect, useState } from 'react';
import animationData from '../assets/Animation.json';

const LottieWrapper = () => {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('lottie-react').then(mod => {
        setLottieComponent(() => mod.default);
      });
    }
  }, []);

  if (!LottieComponent) {return null;}

  return (
    <LottieComponent animationData={animationData} loop autoplay className="lottie-animation" />
  );
};

export default LottieWrapper;
