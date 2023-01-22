import styles from "./PopUp.module.css";
import { motion } from "framer-motion";
import image from "/pikachu.jpg"

export function PopUp({ trigger, setTrigger }) {
  return trigger ? (
    <motion.div
      className={styles.container}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.container_cont}
        animate={{ y: 0 }}
        initial={{ y: 1000 }}
        exit={{ y: -1000 }}
      >
        <img className={styles.img} src={image}></img>
        <p className={styles.text}>Sorry, we haven't caught that pokemon yet.</p>
        <p>Try another!</p>
        <button className={styles.close} onClick={() => setTrigger(false)}>Close</button>
      </motion.div>
    </motion.div>
  ) : (
    ""
  );
}
