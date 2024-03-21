"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/footer"

export const TransitionProvider = ({ children }) => {
    return (
        <AnimatePresence>
            <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;