import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, id }) {
  return (
    <div className="poke-container">
      <div className={classes.card}>
        {" "}
        <p className="id">{id}</p>{" "}
        <div className="img-container">
          {" "}
          <img src={image} alt="PokeImage" />
        </div>{" "}
        <div className="info">
          <h3 className="name">{name[0].toUpperCase() + name.slice(1)}</h3>
          <Link to={`${name}`}>See more</Link>
        </div>
      </div>
    </div>
  );
}
