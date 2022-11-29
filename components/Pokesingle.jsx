import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Pokesingle.css";

export default function Pokesingle() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        setData(res.data);
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokeSingle_container">
      <div className="poke_img">
        <img
          src={data.sprites?.other.dream_world.front_default}
          alt={data.name}
        ></img>
      </div>
      <div className="poke_info">
        <h2>{data.name}</h2>
        <div className="poke_id">id: {data.id}</div>
        <div className="poke_height">height: {data.height}</div>
        <div className="poke_weight">weight: {data.weight}</div>
        {/* <div className="heldItems">{data.held_items.name}</div> */}
        {/* <p>{data.types[0].type.name}</p>
        <p>{data.types[1].type.name}</p> */}
      </div>

      <span onClick={() => navigate(-1)} class="material-symbols-outlined">
        arrow_back
      </span>
    </div>
  );
}
