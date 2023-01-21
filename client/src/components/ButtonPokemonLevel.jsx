import { motion } from "framer-motion";
import styles from "./ButtonPokemonLevel.module.css";

export function ButtonPokemonLevel({ visible, order, sprite }) {
  var buttonStyle = {};
  if (visible) buttonStyle["display"] = "flex";
  if (order == "next") buttonStyle["right"] = "-20px";
  if (order == "back") buttonStyle["left"] = "-20px";
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.9 }}
      className={styles.content}
      style={buttonStyle}
    >
      <img className={styles.image} src={sprite} />
    </motion.div>
  );
}
