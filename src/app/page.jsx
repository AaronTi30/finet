"use client"

import { motion } from "framer-motion"
import React from "react";
import styles from "./homepage.module.css"

const Home = () => {
  return (
    <section
      className={styles.intro}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >

          </motion.div> 
          <motion.span
            className="absolute bottom-0 right-0 text-4x1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Hello! Welcome to </span> 
        <span className="underline"> FINET.</span>

        
      </motion.h1>
      
    </section>
  )
};

export default Home;