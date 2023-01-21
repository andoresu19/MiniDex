import Div100vh from "react-div-100vh";
import styles from "./App.module.css";

export function App() {
  return (
    <Div100vh className={styles.father}>
      <div className={styles.app}>
        <div className={styles.div_container}>Data</div>
        <div className={styles.div_container}>Search</div>
      </div>
    </Div100vh>
  );
}
