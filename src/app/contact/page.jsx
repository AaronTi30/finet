import React from "react";
import * as classes from "./contact.module.css";

export const ContactPage = () => {
  return (
    <div className={classes["contact-us"]}>
      <div className={classes.div}>
        <div className={classes["text-wrapper"]}>CONTACT US</div>
        <img className={classes.line} alt="Line" src="../../components/images/contactLine.png" />
        <div className={classes["online-inquiry"]}>
          <div className={classes["text-wrapper-2"]}>ONLINE INQUIRY</div>
          <div className={classes.overlap}>
            <div className={classes["text-wrapper-3"]}>Name</div>
          </div>
          <div className={classes["input-interest"]}>
            <div className={classes["overlap-group"]}>
              <div className={classes["text-wrapper-3"]}>Reason Of Interest</div>
            </div>
          </div>
          <div className={classes["input-message"]}>
            <div className={classes["div-wrapper"]}>
              <div className={classes["text-wrapper-4"]}>Message (Optional)</div>
            </div>
          </div>
          <div className={classes["input-email"]}>
            <div className={classes["overlap-group"]}>
              <div className={classes["text-wrapper-3"]}>Email</div>
            </div>
          </div>
          <div className={classes["input-phone"]}>
            <div className={classes["overlap-group"]}>
              <div className={classes["text-wrapper-3"]}>Phone Number</div>
            </div>
          </div>
          <img className={classes["input-send"]} alt="Input send" src="../../components/images/input-send.png" />
        </div>
        <div className={classes["contact-details"]}>
          <div className={classes["yash-details"]}>
            <a
              className={classes["text-wrapper-5"]}
              href="mailto:yashvanthalemanti@finet.ca"
              rel="noopener noreferrer"
              target="_blank"
            >
              yashvanthalemanti@finet.ca
            </a>
            <div className={classes["text-wrapper-6"]}>+1 (416)-416-4164</div>
            <div className={classes["text-wrapper-7"]}>Yashvanth Alemanti</div>
          </div>
          <div className={classes["yash-details-2"]}>
            <div className={classes["text-wrapper-8"]}>aaronthakoordeen@gmail.com</div>
            <div className={classes["text-wrapper-9"]}>+1 (416)-647-6476</div>
            <div className={classes["text-wrapper-10"]}>Aaron Thakoordeen</div>
          </div>
          <div className={classes["jose-details"]}>
            <div className={classes["text-wrapper-5"]}>joseateodoro.jt@gmail.com</div>
            <div className={classes["text-wrapper-11"]}>+1 (647)-978-4623</div>
            <div className={classes["text-wrapper-12"]}>Jose Teodoro</div>
          </div>
          <div className={classes["text-wrapper-13"]}>CONTACT DETAILS</div>
        </div>
      </div>
    </div>
  );
};


export default ContactPage