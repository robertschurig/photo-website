import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageData } from '../images.interface';

import styles from './portrait.module.css';

type Props = {
  data: ImageData;
  onSelected: (id: string) => void;
};

export const PortraitItem = ({ data, onSelected }: Props) => {
  function handleKeyDown(event: any) {
    if (event.keyCode === 13) {
      console.log('Enter key pressed');
    }
  }

  return (
    <button
      tabIndex={0}
      className={styles.card}
      onKeyDown={handleKeyDown}
      onClick={() => onSelected(data.id)}
    >
      <img src={data.source} alt="image_2" aria-hidden="true" loading="lazy" />
      <div className={styles.content}>
        <FontAwesomeIcon icon={faPlus} color="white" size="3x" />
      </div>
    </button>
  );
};
