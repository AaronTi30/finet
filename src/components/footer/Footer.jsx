"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from 'next/image'
import Link from "next/link";


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/finet_logo_white.png" alt="logo" width={50} height={50} />
                    <h1 className={styles.logoText}> FINET </h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ipsum obcaecati. 
                    Veritatis quod sunt doloremque dolores labore similique asperiores assumenda atque libero sit nulla, corporis fugit, 
                    rerum obcaecati repudiandae laudantium.
                </p>
                <div className={styles.icons}>

                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/about">About</Link>
                    <Link href="/representatives">Representatives</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Discord</Link>
                    <Link href="/">Tiktok</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer