import Div100vh from "react-div-100vh";
import styles from "./App.module.css";
import { PokemonForm } from "./components/PokemonForm";

export function App() {
  return (
    <Div100vh className={styles.father}>
      <div className={styles.app}>
        <div className={styles.div_container}>Data</div>
        <PokemonForm />
      </div>
    </Div100vh>
  );
}
