import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "./images/finet_logo_white.png"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Image} alt="FINET" />
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar