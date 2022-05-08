import styles from './images.module.css';

export const ImgGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};
