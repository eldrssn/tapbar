import { useEffect, useState } from 'react';

export default function useScroll() {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const TAPBAR_OFFSET = 200;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollY > lastScrollY) {
        if (currentScrollY - lastScrollY > TAPBAR_OFFSET) {
          setIsShow(false);
        }
      } else {
        setIsShow(true);
      }

      !isScrolling && setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling, lastScrollY]);

  useEffect(() => {
    let timeoutId: number;
    let timeout: number;

    const handleScrollStop = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsShow(true);
      }, 1000);
    };

    const handleScrolling = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScrollStop);
    window.addEventListener('scroll', handleScrolling);

    return () => {
      window.removeEventListener('scroll', handleScrollStop);
      window.removeEventListener('scroll', handleScrolling);
    };
  }, []);

  return { isShow };
}
