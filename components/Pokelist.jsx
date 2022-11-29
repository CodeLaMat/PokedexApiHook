import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Pokelist.module.css";
import Card from "./Card";

export default function Pokelist() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          setData(res);
          setIsloading(false);
        });
      });
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.cards}>
      {data.map((card) => (
        <Card
          name={card.name}
          image={card.sprites.other["official-artwork"].front_default}
          id={card.id}
          height={card.height}
          weight={card.weight}
          heldItem={card["held_items"].name}
          types={card.types}
        />
      ))}
    </div>
  );
}
