import styles from "./PokemonStat.module.css";
import { ProgressBar } from "./ProgressBar";

export function PokemonStat({ name, value, maxVal }) {
  return (
    <div className={styles.content}>
      <span className={styles.name}>{name}</span>
      <ProgressBar value={value} maxVal={maxVal} />
      <span className={styles.value}>{value}</span>
    </div>
  );
}
