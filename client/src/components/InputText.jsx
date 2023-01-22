import styles from "./InputText.module.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function InputText({ value, theme, number, placeholder, handle }) {
  const frames = [
    { y: "-40px", fontWeight: 600, fontSize: "15px" },
    { y: "-0", fontWeight: 400, fontSize: "20px" },
  ];
  const [textInput, setTextInput] = useState(value);
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
    if (focus) {
      setTextInput(inputRef.current.value);
      handle(inputRef.current.value);
    }
    textInput === "" && !focus
      ? setAnimation(frames[1])
      : setAnimation(frames[0]);
  };
  const handleBlur = () => {
    setFocus(false);
    handleChange();
    textInput === "" ? setAnimation(frames[1]) : handleChange();
  };

  useEffect(() => {
    setTextInput(value);
    handleChange();
  }, [value, textInput]);

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
        value={textInput}
      />
    </div>
  );
}
