import styles from "./ButtonPokemonLevel.module.css";

export function ButtonPokemonLevel({ visible, order, sprite }) {
  var buttonStyle = {};
  if (visible) buttonStyle["display"] = "flex";
  if (order == "next") buttonStyle["right"] = "-20px";
  if (order == "back") buttonStyle["left"] = "-20px";
  return (
    <div
      className={styles.content}
      style={buttonStyle}
    >
      <img className={styles.image} src={sprite} />
    </div>
  );
}
