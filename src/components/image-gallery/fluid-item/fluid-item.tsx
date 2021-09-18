import styles from "./fluid-item.module.css";

type Props = {
  data: any;
  onSelected?: (id: string) => void;
};

export const FluidItem = ({ data, onSelected }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.card}
      onClick={() => onSelected && onSelected(data.id)}
      onKeyPress={() => onSelected && onSelected(data.id)}
    >
      <figure className={styles.item}>
        <img className={styles.img} src={data.source} alt="" loading="lazy" />
        <figcaption className={styles.caption}>{data.title}</figcaption>
      </figure>
    </div>
  );
};
