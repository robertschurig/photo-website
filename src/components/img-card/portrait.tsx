import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageData } from '../images.interface';

import styles from './portrait.module.css';

type Props = {
  data: ImageData;
  onSelected: (id: string) => void;
};

export const PortraitItem = ({ data, onSelected }: Props) => {
  return (
    <button className={styles.card} onClick={() => onSelected(data.id)}>
      <img src={data.source} alt="image_2" aria-hidden="true" loading="lazy" />
      <div className={styles.content}>
        <FontAwesomeIcon icon={faPlus} color="white" size="3x" />
      </div>
    </button>
  );
};
