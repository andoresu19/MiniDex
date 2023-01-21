import Div100vh from "react-div-100vh";
import styles from "./App.module.css";
import { PokemonData } from "./components/PokemonData";
import { PokemonForm } from "./components/PokemonForm";
import { Toggle } from "./components/Toggle";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  fetch("https://pokeapi.co/api/v2/pokemon/25/")
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon))
    .catch((err) => {
      console.log(err);
    });

  const handleTheme = (curr) => (curr === "light" ? styles.father : styles.fatherDark);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Div100vh className={handleTheme(theme)} id={theme}>
        <div className={styles.app}>
          <PokemonData theme={theme}/>
          <PokemonForm theme={theme}/>
          <Toggle changeTheme={toggleTheme} />
        </div>
      </Div100vh>
    </ThemeContext.Provider>
  );
}
