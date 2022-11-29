import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <p className="copyright">Copyright &copy; 2022</p>
      </div>
    </footer>
  );
}
