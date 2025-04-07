import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { AboutAnimation } from '../Lottie';

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  .text {
    flex: 1;
  }

  .lottie-container {
    flex: 1;
    text-align: center;
    max-width: 400px;
  }

  .lottie-container canvas,
  .lottie-container svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .text,
    .lottie-container {
      width: 100%;
    }
  }
`;

const Hero = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <StyledHeroSection id="hero" ref={revealContainer}>
      <div className="text">
        <h1>Hello, I'm Nakhun Chuski</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build performant and scalable web applications. Passionate about solving real-world
          problems with code.
        </p>
      </div>

      <div className="lottie-container">
        <AboutAnimation />
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
