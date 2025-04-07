import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { WhatIDoAnimation } from '../Lottie';

const config = require('@config');
const { skillsSection } = config;

const StyledWhatIDo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 50px auto;
  gap: 20px;

  .image-container {
    flex: 1;
    text-align: center;
  }

  .lottie-animation {
    max-width: 400px;
    width: 100%;
  }

  .skills-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .skill-card {
    background: var(--light-navy);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .icons img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .image-container {
      order: 2;
    }

    .skills-container {
      order: 1;
    }
  }
`;

const WhatIDo = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <StyledWhatIDo id="what-i-do" ref={revealContainer}>
      <WhatIDoAnimation />
      <div className="skills-container">
        <h2 className="numbered-heading">{skillsSection.title}</h2>
        {skillsSection.skills.map(skill => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.title}</h3>
            <ul>
              {skill.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="icons">
              {skill.softwareSkills.map((software, i) => (
                <img
                  key={i}
                  src={`https://api.iconify.design/${software.icon}.svg`}
                  alt={software.name}
                  title={software.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledWhatIDo>
  );
};

export default WhatIDo;
