import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Image
                src="/finet_logo_white.png"
                width={72}
                height={72}
                quality={100}
                priority={true}
                className="flex justify-center items-center"
            >
                
                </Image></div>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar