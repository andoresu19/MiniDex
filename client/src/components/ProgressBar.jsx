import styles from "./ProgressBar.module.css";

export function ProgressBar({ value, maxVal, theme }) {
  if (!maxVal) {
    maxVal = 100;
  }
  if (!value) {
    value = 0;
  }
  if (value == 0) {
    value = 0.2
  }
  const handleTheme = (curr) => (curr === "light" ? styles.bar : styles.barDark);

  return (
    <div className={handleTheme(theme)}>
      <div
        className={styles.progress}
        style={{
          width: `${(value / maxVal) * 100}%`,
        }}
      ></div>
    </div>
  );
}
