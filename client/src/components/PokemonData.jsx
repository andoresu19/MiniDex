import styles from "./PokemonData.module.css";
import { PokemonStat } from "./PokemonStat";
import { ButtonPokemonLevel } from "./ButtonPokemonLevel";
import { Tilt } from "./Tilt";
import { TypeTag } from "./TypeTag";
import {useState} from "react";
import { motion } from "framer-motion";

export function PokemonData({ theme, pokemon }) {
  const sprite =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

  const options = {
    scale: 1.05,
    speed: 800,
    max: 15,
  };
  const handleTheme = (curr) =>
    curr === "light" ? styles.container : styles.containerDark;

  const types = {
    normal: ["#9E9FA1"],
    fire: ["#FC0022"],
    water: ["#5E43F1"],
    grass: ["#00B925"],
    flying: ["#84AFEE"],
    fighting: ["#FF7100"],
    poison: ["#B800CF"],
    electric: ["#EDD500"],
    ground: ["#905025"],
    rock: ["#A9B380"],
    psychic: ["#FF0075"],
    ice: ["#00DBFF"],
    bug: ["#7EB418"],
    ghost: ["#840078"],
    steel: ["#57A1B5"],
    dragron: ["#8100E8"],
    dark: ["#4F3C3A"],
    fairy: ["#FF00F0"],
  };
  const [inte, setInte] = useState('30')

  const handleHover = () => {
    setInte('40')
  }
  const handleHoverOut = () => {
    setInte('20')
  }

  return (
    <motion.div className={handleTheme(theme)}>
      <Tilt options={options} className={styles.container}>
        <div
          className={styles.container_cont}
          style={{ background: types[pokemon.types[0]] + inte }}
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          <div className={styles.image_box}>
            <div
              className={styles.image_back}
              style={{ background: types[pokemon.types[0]] + inte }}
            />
            <img className={styles.img} src={pokemon.img_principal} />
          </div>
          <div className={styles.pokemon_data}>
            <div className={styles.types_box}>
              {pokemon.types.map((f) => (
                <TypeTag type={f} color={types[f]} />
              ))}
            </div>
            <div className={styles.measures_box}>
              <span className={styles.measure}>Weight: {pokemon.weight}</span>
              <span className={styles.measure}>Heigth: {pokemon.height}</span>
            </div>
            <div className={styles.stats_box}>
              <span className={styles.title}>Base stats</span>
              <PokemonStat
                name={"XP:"}
                value={pokemon.xp}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"HP:"}
                value={pokemon.hp}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Atk:"}
                value={pokemon.atk}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Def:"}
                value={pokemon.def}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"SpA:"}
                value={pokemon.spa}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"SpD:"}
                value={pokemon.spd}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Spe:"}
                value={pokemon.spe}
                maxVal={255}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </Tilt>
      <ButtonPokemonLevel visible={0} order="next" sprite={sprite} />
      <ButtonPokemonLevel visible={0} order="back" sprite={sprite} />
    </motion.div>
  );
}
