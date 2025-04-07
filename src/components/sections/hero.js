// ===============================================
// 1. Imports
// ===============================================

// React core & hooks
import React, { useState, useEffect } from 'react';

// Animation utilities from react-transition-group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Styled-components for styling
import styled from 'styled-components';

// Utility values for animation delays
import { navDelay, loaderDelay } from '@utils';

// Custom accessibility hook to detect reduced motion preference
import { usePrefersReducedMotion } from '@hooks';

// Lottie animation component (background animation)
import { HeroAnimation } from '../Lottie';

// ===============================================
// 2. Styled Components
// ===============================================

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}; // center content using flex
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 0;

  // Responsive adjustments for small screens or short viewports
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  // Heading styles
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  // Resume button
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  // Ensures Lottie animation is in the background
  & > *:not(canvas):not(.lottie-bg) {
    position: relative;
    z-index: 1;
  }

  .lottie-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.25;
    pointer-events: none;
    transform: scale(0.85);
  }
`;

// ===============================================
// 3. Hero Component
// ===============================================

const Hero = () => {
  // Mount state to trigger animation only after a short delay
  const [isMounted, setIsMounted] = useState(false);

  // Accessibility hook to respect user motion preferences
  const prefersReducedMotion = usePrefersReducedMotion();

  // Trigger animation after a delay when component mounts
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // Text elements to render
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Aditya Sharma</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I am a software engineer. I build full-stack applications, and turn cloud architectures into
      scalable solutions
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="https://drive.google.com/file/d/17lujsv-mOBYDsBB6vSeW9xv26fmpWPCV/view?usp=sharing"
      target="_blank"
      rel="noreferrer">
      Check out my Resume!
    </a>
  );

  // Combine all elements into an array for dynamic rendering
  const items = [one, two, three, four, five];

  // ===============================================
  // 4. Render Section
  // ===============================================

  return (
    <StyledHeroSection>
      {/* Animated background (faint, decorative only) */}
      <div className="lottie-bg">
        <HeroAnimation />
      </div>

      {/* If reduced motion is preferred, render everything statically */}
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        // Animate each element with a fade-up effect and delay
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

// ===============================================
// 5. Export
// ===============================================

export default Hero;
