import styles from "./InputText.module.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export function InputText({ theme, number, placeholder }) {
  const frames = [
    { y: "-40px", fontWeight: 600, fontSize: "15px" },
    { y: "-0", fontWeight: 400, fontSize: "20px" },
  ];
  const [textInput, setTextInput] = useState("");
  const [focus, setFocus] = useState(false);
  const [animation, setAnimation] = useState(frames[1]);
  const inputRef = useRef("");

  const handleTheme = (curr) =>
    curr === "light" ? styles.container : styles.containerDark;

  const handleFocus = () => {
    setFocus(true);
    handleChange();
    setAnimation(frames[0]);
  };
  const handleChange = () => {
    setTextInput(inputRef.current.value);
    textInput === "" && !focus
      ? setAnimation(frames[1])
      : setAnimation(frames[0]);
  };
  const handleBlur = () => {
    setFocus(false);
    handleChange();
    textInput === "" ? setAnimation(frames[1]) : handleChange();
  };

  return (
    <div className={handleTheme(theme)}>
      <motion.label
        className={styles.label}
        htmlFor={placeholder}
        animate={animation}
      >
        {placeholder}
      </motion.label>
      <input
        className={styles.input}
        type={number ? "number" : "text"}
        id={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
      />
    </div>
  );
}
