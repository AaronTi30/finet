import React from "react";
import * as classes from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={classes.box}>
            <div className={classes["base-layer"]}>
                <div className={classes["overlap-group"]}>
                    <div className={classes.group}>
                        <div className={classes["text-wrapper"]}>About Us</div>
                    </div>
                    <p className={classes.div}>Making Connections For Students Easier Than Ever!</p>
                </div>
                <div className={classes["text-wrapper-2"]}>Why We Started FINET</div>
                <p className={classes["description"]}>
                {/* description goes here */}
                </p>
            </div>
        </div>
    );
};

export default AboutPage