import { useEffect, useState } from "react";
import styles from "./Toggle.module.css";

export function Toggle({changeTheme}) {
  const [isToggle, setIsToggle] = useState(false);
  const handleIcon = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
    changeTheme()
  };
  useEffect(() => {});

  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.check}
        onChange={handleIcon}
      />
      <label
        htmlFor="toggle"
        className={isToggle ? styles.label : styles.labelDisabled}
      >
        <div className={styles.test} />
      </label>
    </div>
  );
}
