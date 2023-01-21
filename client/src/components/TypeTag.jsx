import styles from "./TypeTag.module.css";

export function TypeTag({ type, color }) {
  return <span className={styles.type} style={{background: color}}>{type}</span>;
}
