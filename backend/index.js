const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const conf = {
  host: "mysql_server",
  user: "brayan",
  password: "pass",
  database: "minidex"
};

let db = null

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>MiniDex API</h1>`);
});

app.get("/create-table", (req, res) => {

  db =  mysql.createConnection(conf);
  const sql = `
    CREATE TABLE IF NOT EXISTS pokemons (
      id INT NOT NULL,
      name TEXT NOT NULL,
      image TEXT,
      xp INT,
      hp INT,
      atk INT, 
      def INT,
      spa INT,
      spd INT,
      spe INT,
      weight INT,
      height INT,
      types TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  ENGINE=INNODB;
  `;

  db.query(sql, (err, data) => {
    if (err) return res.send(err);
    return res.json("Pokemon table created");
  });
});

app.get("/pokemons", (req, res) => {
  const sql = `SELECT * FROM pokemons`;

  db.query(sql, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/pokemon/:id", (req, res) => {
  const pokemonId = req.params.id;
  const sql = "SELECT * FROM pokemons WHERE `id` = ?";

  db.query(sql, [pokemonId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/pokemon", (req, res) => {
  const sql =
    "INSERT INTO pokemons(`id`, `name`, `image`, `xp`, `hp`, `atk`, `def`, `spa`, `spd`, `spe`, `weight`, `height`, `types`) VALUES (?)";

  const values = [
    req.body.id,
    req.body.name,
    req.body.image,
    req.body.xp,
    req.body.hp,
    req.body.atk,
    req.body.def,
    req.body.spa,
    req.body.spd,
    req.body.spe,
    req.body.weight,
    req.body.height,
    req.body.types,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/pokemon/:id", (req, res) => {
  const pokemonId = req.params.id;
  const sql = " DELETE FROM pokemons WHERE id = ? ";

  db.query(sql, [pokemonId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/pokemon/:id", (req, res) => {
  const pokemonId = req.params.id;
  const sql =
    "UPDATE pokemons SET `id`= ?, `name`= ?, `image`= ?, `xp`= ?, `hp`= ?, `atk`= ?, `def`= ?, `spa`= ?, `spd`= ?, `spe`= ?, `weight`= ?, `height`= ?, `types`= ? WHERE id = ?";

  const values = [
    req.body.id,
    req.body.name,
    req.body.image,
    req.body.xp,
    req.body.hp,
    req.body.atk,
    req.body.def,
    req.body.spa,
    req.body.spd,
    req.body.spe,
    req.body.weight,
    req.body.height,
    req.body.types,
  ];

  db.query(sql, [...values, pokemonId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(3000);
console.log("Listening on port 3000");
