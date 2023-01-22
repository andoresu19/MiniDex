import styles from "./PokemonForm.module.css";
import { InputText } from "./InputText";
import {useEffect, useState} from "react";

export function PokemonForm({ theme, handleClick, pokemon }) {
  const [idValue, setIdValue] = useState(pokemon.id)
  const [nameValue, setNameValue] = useState(pokemon.name)

  const handleTheme = (curr) =>
    curr === "light" ? styles.container : styles.containerDark;

  const handleId = (change) => {
    if (change) 
    {
      setNameValue('')
      setIdValue(change)
    }
    return nameValue
  };
  const handleName = (change) => {
    if (change) 
    {
      setIdValue('')
      setNameValue(change)
    }
    return idValue
  };

  useEffect(() => {
    setIdValue(pokemon.id)
    setNameValue(pokemon.name)
  }, [pokemon])


  return (
    <div className={handleTheme(theme)}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Mini<span className={styles.opacity}>Dex</span>
        </h1>
        <p className={styles.subtitle}>
          A small web version of the pokemon pokedex.
        </p>
      </div>
      <div className={styles.inputs}>
        <InputText theme={theme} number placeholder={"ID"} value={idValue} handle={handleId}/>
        <InputText theme={theme} placeholder={"Name"} value={nameValue} handle={handleName}/>
      </div>
      <label className={styles.button_label} htmlFor="button_query">
        Hola
      </label>
      <button
        type="button"
        id="button_query"
        name="button_query"
        className={styles.button}
        onClick={() => {handleClick(idValue, nameValue)}}
      >
        Consultar
      </button>
    </div>
  );
}
