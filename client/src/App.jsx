import Div100vh from "react-div-100vh";
import styles from "./App.module.css";
import { PokemonData } from "./components/PokemonData";
import { PokemonForm } from "./components/PokemonForm";
import { Toggle } from "./components/Toggle";
import { useState } from "react";
import logo from "/pokemon_logo.png"
import {PopUp} from "./components/PopUp";

export function App() {
  const [theme, setTheme] = useState("light");
  const [popUp, setPopUp] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const initObj = {
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
    img_principal: logo,
  }
  const [pokemon, setPokemon] = useState(initObj);

  const fun = (id, name) => {
    console.log(id, name);
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + name)
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
        setPokemon(initObj)
        setPopUp(true)
      });
  };

  const handleTheme = (curr) =>
    curr === "light" ? styles.father : styles.fatherDark;

  return (
    <Div100vh className={handleTheme(theme)} id={theme}>
      <div className={styles.app}>
        <PokemonData theme={theme} pokemon={pokemon} />
        <PokemonForm handleClick={fun} theme={theme} pokemon={pokemon} />
        <Toggle changeTheme={toggleTheme} />
      </div>
      <PopUp trigger={popUp} setTrigger={setPopUp}/>
    </Div100vh>
  );
}
