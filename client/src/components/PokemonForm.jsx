import styles from "./PokemonForm.module.css";

export function PokemonForm() {
  return (
    <div className={styles.div_container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Mini-dex</h1>
        <p className={styles.subtitle}>
          A small web version of the pokemon pokedex.
        </p>
      </div>
      <div className={styles.inputs}>
        <input className={styles.input} type="text"  placeholder="ID"/>
        <input className={styles.input} type="text" placeholder="Name"/>
      </div>
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
