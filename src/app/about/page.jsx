import React from "react";
import * as classes from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={classes.about}>
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
            <div className={classes.founders}>
                <div className={classes["about-us-own"]}>
                    <div className={classes.meet-group}>
                        <div className={classes["meet-text-wrapper"]}>MEET</div>
                        <div className={classes.found-text-wrapper}>THE FOUNDERS</div>
                    </div>
                    {/* Yash */}
                    <img className={classes.meet-group} src="" alt="" />
                    <div className={classes["name-text-wrapper"]}>John Jones</div>
                    <p className={classes["name-text-wrapper"]}>Founder - Student- Product Manager</p>
                    <p className={classes["note-text-warpper"]}>
                        {/* description goes here */}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AboutPage