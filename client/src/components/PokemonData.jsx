import styles from "./PokemonData.module.css";
import image from "../assets/004.png";
import { PokemonStat } from "./PokemonStat";
import { ButtonPokemonLevel } from "./ButtonPokemonLevel";
import { Tilt } from "./Tilt";
import {TypeTag} from "./TypeTag";

export function PokemonData({ theme }) {
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
  const type = 'fire'

  return (
    <div className={handleTheme(theme)}>
      <Tilt options={options} className={styles.container}>
        <div className={styles.container_cont} style={{background: types[type]+'14'}}>
          <div className={styles.image_box}>
            <img className={styles.img} src={image} />
          </div>
          <div className={styles.pokemon_data}>
            <div className={styles.types_box}>
              <TypeTag type={type} color={types[type]}></TypeTag>
              <TypeTag type={'ice'} color={types['ice']}></TypeTag>
            </div>
            <div className={styles.measures_box}>
              <span className={styles.measure}>Weight: 65g</span>
              <span className={styles.measure}>Heigth: 12m</span>
            </div>
            <div className={styles.stats_box}>
              <span className={styles.title}>Base stats</span>
              <PokemonStat
                name={"XP:"}
                value={100}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"HP:"}
                value={100}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Atk:"}
                value={23}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Def:"}
                value={45}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat name={"SpA:"} value={7} maxVal={255} theme={theme} />
              <PokemonStat
                name={"SpD:"}
                value={230}
                maxVal={255}
                theme={theme}
              />
              <PokemonStat
                name={"Spe:"}
                value={58}
                maxVal={255}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </Tilt>
      <ButtonPokemonLevel visible={1} order="next" sprite={sprite} />
      <ButtonPokemonLevel visible={1} order="back" sprite={sprite} />
    </div>
  );
}
