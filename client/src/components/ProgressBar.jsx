import styles from "./ProgressBar.module.css";

export function ProgressBar({ value, maxVal }) {
  if (!maxVal) {
    maxVal = 100;
  }
  if (!value) {
    value = 0;
  }
  if (value == 0) {
    value = 0.2
  }

  return (
    <div className={styles.bar}>
      <div
        className={styles.progress}
        style={{
          width: `${(value / maxVal) * 100}%`,
        }}
      ></div>
    </div>
  );
}
