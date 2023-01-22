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
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    height: "",
    weight: "",
    xp: "0",
    hp: "0",
    atk: "0",
    def: "0",
    spa: "0",
    spd: "0",
    spe: "0",
    types: [],
    img_principal: "",
  });

  const fun = (id, name) => {
    console.log(id, name)
    fetch("https://pokeapi.co/api/v2/pokemon/"+id+name)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          xp: data.base_experience,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          spa: data.stats[3].base_stat,
          spd: data.stats[4].base_stat,
          spe: data.stats[5].base_stat,
          types: data.types.map((type) => type["type"]["name"]),
          img_principal: data.sprites.other["official-artwork"].front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTheme = (curr) =>
    curr === "light" ? styles.father : styles.fatherDark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Div100vh className={handleTheme(theme)} id={theme}>
        <div className={styles.app}>
          <PokemonData theme={theme} pokemon={pokemon} />
          <PokemonForm handleClick={fun} theme={theme} pokemon={pokemon} />
          <Toggle changeTheme={toggleTheme} />
        </div>
      </Div100vh>
    </ThemeContext.Provider>
  );
}
