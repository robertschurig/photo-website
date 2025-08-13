import { ImageData } from '../images.interface';

import styles from './portrait.module.css';

type Props = {
  data: ImageData;
  onSelected: (id: string) => void;
};

export const PortraitItem = ({ data, onSelected }: Props) => {
  return (
    <button className={styles.card} onClick={() => onSelected(data.id)}>
      <picture>
        <source srcSet={data.thumbnail.avif} type="image/avif" />
        <img
          src={data.thumbnail.jpg}
          alt="image_2"
          aria-hidden="true"
          fetchPriority="high"
        />
      </picture>
      <div className={styles.overlay}>&#x2B;</div>
    </button>
  );
};
