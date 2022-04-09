import styles from './image-gallery.module.css';

export const ImageGallery = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};
