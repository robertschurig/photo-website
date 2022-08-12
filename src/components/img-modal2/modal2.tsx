import { ImageData } from 'components/images.interface';
import { useEventListener } from 'hooks';
import { useMemo } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router';
import styles from './modal2.module.css';

const ESCAPE_KEYS = ['27', 'Escape'];
const ARROW_LEFT_KEYS = ['37', 'ArrowLeft'];
const ARROW_RIGHT_KEYS = ['39', 'ArrowRight'];

export const Modal2 = () => {
  const navigate = useNavigate();
  const { images } = useOutletContext<{ images: ImageData[] }>();
  const { id: selectedImageId } = useParams();

  const currentImageIdx = images?.findIndex(
    (item) => item.id === selectedImageId
  );

  const navigateToParent = () => {
    navigate('../');
  };

  const keydownHandler = (event: Event) => {
    event.preventDefault();
    const { key } = event as KeyboardEvent;
    const keyValue = String(key);

    if (ESCAPE_KEYS.includes(keyValue)) {
      navigateToParent();
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

    navigate('../' + images[selectedImageIndex].id);
  };
  const prevImage = () => {
    const nextIndex = currentImageIdx - 1;
    const selectedImageIndex = nextIndex < 0 ? images.length - 1 : nextIndex;

    navigate('../' + images[selectedImageIndex].id);
  };

  useEventListener('keydown', keydownHandler);

  const currentImage = images?.[currentImageIdx];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <button className={styles.prev} onClick={prevImage}>
          &#10094;
        </button>
        <button className={styles.next} onClick={nextImage}>
          &#10095;
        </button>

        {currentImage && (
          <div className={styles.slide}>
            <img
              alt={currentImage.id}
              src={currentImage.source}
              loading="lazy"
            />
          </div>
        )}
      </div>
      <button
        className={styles.close}
        aria-label="close modal"
        onClick={navigateToParent}
      >
        &#10005;
      </button>
    </div>
  );
};
