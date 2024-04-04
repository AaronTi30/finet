import React from "react";
import * as classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.box}>
        <footer className={classes.footer}>
          <div className={classes["overlap-group"]}>
            <div className={classes["text-wrapper"]}>Join Our Team</div>
            <div className={classes["text-wrapper-2"]}>Students</div>
            <div className={classes["text-wrapper-3"]}>About Us</div>
            <div className={classes["text-wrapper-4"]}>Projects</div>
          </div>
        </footer>
      </div>
    )
}

export default Footer