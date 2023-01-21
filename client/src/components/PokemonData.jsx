import styles from "./PokemonData.module.css";
import image from "../assets/004.png";
import { PokemonStat } from "./PokemonStat";
import { ButtonPokemonLevel } from "./ButtonPokemonLevel";
import { Tilt } from "./Tilt";

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

  return (
    <div className={handleTheme(theme)}>
      <Tilt options={options} className={styles.container}>
        <div className={styles.container_cont}>
          <div className={styles.image_box}>
            <img className={styles.img} src={image} />
          </div>
          <div className={styles.pokemon_data}>
            <div className={styles.types_box}>
              <span className={styles.type}>Fire</span>
              <span className={styles.type}>Earth</span>
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
