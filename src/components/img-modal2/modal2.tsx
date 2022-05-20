import { ImageData } from 'components/images.interface';
import { useEventListener } from 'hooks';
import { useEffect, useState } from 'react';
import styles from './modal2.module.css';

const ESCAPE_KEYS = ['27', 'Escape'];
const ARROW_LEFT_KEYS = ['37', 'ArrowLeft'];
const ARROW_RIGHT_KEYS = ['39', 'ArrowRight'];

type Props = {
  selectedImageId: string;
  images: ImageData[];
  onCloseClicked: () => void;
};

export const Modal2 = ({ images, selectedImageId, onCloseClicked }: Props) => {
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(() =>
    images.findIndex((item) => item.id === selectedImageId)
  );

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
    const selectedImageIndex = nextIndex === images.length ? 0 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };
  const prevImage = () => {
    const nextIndex = currentImageIdx - 1;
    const selectedImageIndex = nextIndex < 0 ? images.length - 1 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };

  useEventListener('keydown', keydownHandler);
  useEffect(() => {
    if (!images || !selectedImageId) {
      return;
    }

    const idx = images.findIndex((item) => item.id === selectedImageId);
    setCurrentImageIdx(idx);
  }, [images, selectedImageId]);

  const currentImage = images[currentImageIdx];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <button className={styles.prev} onClick={prevImage}>
          &#10094;
        </button>
        <button className={styles.next} onClick={nextImage}>
          &#10095;
        </button>

        <ul>
          {images.map((image) => (
            <li
              key={image.id}
              data-active={image.id === currentImage.id}
              className={styles.slide}
            >
              <img alt={image.id} src={image.source} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={styles.close}
        aria-label="close modal"
        onClick={onCloseClicked}
      >
        &#10005;
      </button>
    </div>
  );
};
