import { useEffect } from 'react';
import '../styles/CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = e => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    const handleHover = e => {
      if (e.target.closest('a, button')) {
        cursor.classList.add('custom-cursor-hover');
      } else {
        cursor.classList.remove('custom-cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mouseout', handleHover);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorEffect;
