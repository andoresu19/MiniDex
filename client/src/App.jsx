import Div100vh from "react-div-100vh";
import styles from "./App.module.css";
import { PokemonData } from "./components/PokemonData";
import { PokemonForm } from "./components/PokemonForm";
import { Toggle } from "./components/Toggle";
import { useState } from "react";
import logo from "/pokemon_logo.png";
import { PopUp } from "./components/PopUp";
import axios from "axios";

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
  };
  const [pokemon, setPokemon] = useState(initObj);
  const savePokemon = async (pokemon) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/pokemon/${pokemon.id}`
      );
      if (res.data.length == 0) {
        console.log(JSON.stringify(pokemon.types));
        const tempPokemon = {
          name: pokemon.name,
          id: pokemon.id,
          height: pokemon.height,
          weight: pokemon.weight,
          xp: pokemon.xp,
          hp: pokemon.hp,
          atk: pokemon.atk,
          def: pokemon.def,
          spa: pokemon.spa,
          spd: pokemon.spd,
          spe: pokemon.spe,
          types: JSON.stringify(pokemon.types),
          image: pokemon.img_principal,
        };
        await axios.post("http://localhost:3000/pokemon", tempPokemon);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fun = (id, name) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + name.toLowerCase())
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
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
        };
        setPokemon(pokemon);
        savePokemon(pokemon);
      })
      .catch((err) => {
        console.log(err);
        setPokemon(initObj);
        setPopUp(true);
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
      <PopUp trigger={popUp} setTrigger={setPopUp} />
    </Div100vh>
  );
}
