// hooks/useSmoothScroll.ts
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (event: Event) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Clean up event listeners on component unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};

export default useSmoothScroll;
