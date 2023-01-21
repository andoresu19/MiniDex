import styles from "./PokemonForm.module.css";

export function PokemonForm() {
  return (
    <div className={styles.div_container}>
      <h1 className={styles.title}>Mini-dex</h1>
      <p className={styles.subtitle}>A portable mini web pokedex</p>
      <input className={styles.input} type="text" />
      <input className={styles.input} type="text" />
      <label className={styles.button_label} for="button_query">
        Hola
      </label>
      <button
        type="button"
        id="button_query"
        name="button_query"
        className={styles.button}
      >
        Consultar
      </button>
    </div>
  );
}
