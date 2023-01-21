import styles from "./ButtonPokemonLevel.module.css";

export function ButtonPokemonLevel({order, sprite}) {
  return (
    <div className={styles.content}>
      <img className={styles.image} style={{}} src={sprite} />
    </div>
  );
}
