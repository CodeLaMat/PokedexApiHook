import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
      <div>
        <h2>{data.name}</h2>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
