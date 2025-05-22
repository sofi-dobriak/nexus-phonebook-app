import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.css';
import { IoIosArrowUp } from 'react-icons/io';
import clsx from 'clsx';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = (): void => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return (): void => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={clsx(styles.backToTopButton, isVisible && styles.visible)}
    >
      <IoIosArrowUp className={styles.backToTopIcon} />
    </button>
  );
};

export default BackToTopButton;
