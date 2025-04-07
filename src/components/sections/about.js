// Import necessary React hooks and libraries
import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // For optimized image rendering in Gatsby
import styled from 'styled-components'; // For writing scoped CSS in JS
import { srConfig } from '@config'; // Scroll reveal configuration
import sr from '@utils/sr'; // Scroll reveal utility
import { usePrefersReducedMotion } from '@hooks'; // Custom hook to respect user's reduced motion setting
import WhatIDo from './whatIDo'; // Component showing "What I Do" section

// Styled Components
// This section handles the layout and design of the About section
const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr; // Creates two columns: 3 parts text, 2 parts image
    grid-gap: 50px; // Space between columns

    @media (max-width: 768px) {
      display: block; // Stack elements on smaller screens
    }
  }
`;

// Styles specific to the text and skills list
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

// Styles specific to the profile image section
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

// Main About component
const About = () => {
  const revealContainer = useRef(null); // Reference for scroll reveal
  const prefersReducedMotion = usePrefersReducedMotion(); // Respect user's motion settings

  // Scroll reveal logic, runs once on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      return; // If user prefers reduced motion, skip scroll animations
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // List of technologies to be shown
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Express.js',
    'Node.js',
    'MongoDB',
    'MySQL',
    'AWS',
    'Docker',
    'Redis',
    'Tailwind',
    'Tensorflow',
  ];

  return (
    <>
      {/* Main About section */}
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          {/* Left: About Text and Skills */}
          <StyledText>
            <div>
              <p>
                Hey there! I'm Aditya Sharma, a developer who loves turning caffeine into code and
                bugs into features. My interest in development started back during covid 2020...
              </p>

              <p>
                In 2022, I had the incredible opportunity to work with Microsoft as an Engage
                Mentee, where we were given multiple pathways among which we had to build an
                application solving a problem for the mass...
              </p>

              <p>
                Fast forward to today, I’ve built high-performance platforms, including an Online
                Judge system... and a faculty allocation system...
              </p>

              <p>
                Recently, I completed a course on AWS Cloud Solutions, reinforcing my ability to
                architect scalable, cloud-first applications...
              </p>

              <p>Here are a few technologies I’ve been working with recently:</p>
            </div>

            {/* List of technologies */}
            <ul className="skills-list">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </StyledText>

          {/* Right: Profile Image */}
          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/me.jpg"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>

      {/* Additional section: What I Do */}
      <WhatIDo />
    </>
  );
};

export default About; // Exporting the About component for use elsewhere
