import React, { useEffect, useRef, useState } from 'react'; // ✅ Added useState
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import Lottie from 'lottie-react'; // ✅ Added Lottie import
import animationData from '../../assets/ContactAnimation.json'; // ✅ Your animation file

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .lottie-container {
    max-width: 300px; /* ✅ New class for styling Lottie */
    margin: 30px auto;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isClient, setIsClient] = useState(false); // ✅ Add state for client-side rendering

  useEffect(() => {
    setIsClient(true); // ✅ Set after mount to avoid hydration issues

    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently exploring new opportunities and open to connecting! If you have a role that
        aligns with my skills or just want to chat, feel free to reach out—I’d love to hear from
        you!
      </p>

      {/* ✅ Added Lottie animation before the Say Hello button */}
      {isClient && (
        <div className="lottie-container">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
