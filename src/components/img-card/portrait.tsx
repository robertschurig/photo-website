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
        <source srcSet={data.sources.avif.thumb} type="image/avif" />
        <img
          src={data.sources.jpg.thumb}
          alt="image_2"
          aria-hidden="true"
          loading="lazy"
        />
      </picture>
      <div className={styles.overlay}>&#x2B;</div>
    </button>
  );
};
