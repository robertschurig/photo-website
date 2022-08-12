import { ImageData } from '../images.interface';

import styles from './portrait.module.css';

type Props = {
  data: ImageData;
  onSelected: (id: string) => void;
};

export const PortraitItem = ({ data, onSelected }: Props) => {
  return (
    <button
      tabIndex={0}
      className={styles.card}
      onClick={() => onSelected(data.id)}
    >
      <img src={data.source} alt="image_2" aria-hidden="true" loading="lazy" />
      <div className={styles.content}>&#x2795;</div>
    </button>
  );
};
