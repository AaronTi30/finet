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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas  est sit amet porttitor sagittis. 
                Suspendisse a sollicitudin arcu, eget  dictum libero. Maecenas in volutpat massa. Aliquam sit amet blandit  mauris. 
                Quisque pharetra lorem ac risus laoreet, et tristique dolor  tincidunt. Nullam a nulla vitae neque pulvinar sollicitudin vitae a  arcu. 
                Pellentesque eu aliquet justo, non scelerisque lacus. <br />
                <br />
                Maecenas sed  hendrerit massa. Aenean id varius tellus. Maecenas purus ex, feugiat in  sollicitudin nec, malesuada nec libero. Pellentesque 
                habitant morbi  tristique senectus et netus et malesuada fames ac turpis egestas. Proin  non aliquet diam. 
                </p>
            </div>
            
            {/* not reading properly */}
            <div className={classes.founder}>
                <div className="group">
                    <div className="text-wrapper">MEET</div>
                    <div className="div">THE FOUNDERS</div>
                </div>
                <img className="found-line" alt="Line" src="../../components/images/about-found-line.png"/>
                <img className="yash" alt="yash" src="../../components/images/stock-headshot.png"/>
                <img className="yash2" alt="yash2" src="../../components/images/stock-headshot.png"/>
           </div>
        </div>
    );
};

export default AboutPage