import { useEventListener } from 'hooks';
import { useEffect, useState } from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ImageData } from '../images.interface';
import styles from './img-modal.module.css';

const ESCAPE_KEYS = ['27', 'Escape'];
const ARROW_LEFT_KEYS = ['37', 'ArrowLeft'];
const ARROW_RIGHT_KEYS = ['39', 'ArrowRight'];

type Props = {
  imageList: ImageData[];
  selectedImageId: string;
  onCloseClicked: () => void;
};

export const ImageModal = (props: Props) => {
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  const { imageList, selectedImageId, onCloseClicked } = props;
  const isActive = selectedImageId !== undefined && selectedImageId !== null;

  const keydownHandler = (event: Event) => {
    event.preventDefault();
    const { key } = event as KeyboardEvent;
    const keyValue = String(key);

    if (ESCAPE_KEYS.includes(keyValue)) {
      onCloseClicked();
      return;
    }
    if (ARROW_LEFT_KEYS.includes(keyValue)) {
      prevImage();
      return;
    }
    if (ARROW_RIGHT_KEYS.includes(keyValue)) {
      nextImage();
      return;
    }
  };

  const nextImage = () => {
    const nextIndex = currentImageIdx + 1;
    const selectedImageIndex = nextIndex === imageList.length ? 0 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };
  const prevImage = () => {
    const nextIndex = currentImageIdx - 1;
    const selectedImageIndex = nextIndex < 0 ? imageList.length - 1 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };

  useEventListener('keydown', keydownHandler);
  useEffect(() => {
    if (!imageList || !selectedImageId) {
      return;
    }

    const idx = imageList.findIndex((item) => item.id === selectedImageId);
    setCurrentImageIdx(idx);
  }, [imageList, selectedImageId]);

  const currentImage = imageList[currentImageIdx];

  return currentImage ? (
    <div
      className={`${styles.container}${isActive ? ` ${styles.isActive}` : ''}`}
    >
      <div className={styles.background}></div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={currentImage.source} alt="" />
      </div>
      <div className={styles.nav}>
        <div
          role="button"
          tabIndex={0}
          className={styles.navButton}
          onClick={prevImage}
          onKeyPress={prevImage}
        >
          <span className={styles.leftIcon}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </span>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={styles.navButton}
          onClick={nextImage}
          onKeyPress={nextImage}
        >
          <span className={styles.rightIcon}>
            <FontAwesomeIcon icon={faAngleRight} size="3x" />
          </span>
        </div>
      </div>
      <button
        className={styles.closeButton}
        aria-label="close"
        onClick={onCloseClicked}
      ></button>
    </div>
  ) : null;
};
