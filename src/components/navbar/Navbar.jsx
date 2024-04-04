import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} alt="FINET" src="../images/finet_logo_white.png"/>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar