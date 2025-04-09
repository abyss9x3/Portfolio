import { useEffect } from 'react';
import '../styles/CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updatePosition = () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', moveCursor);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorEffect;
