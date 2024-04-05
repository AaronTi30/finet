import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.logo} src="../images/finet_logo_white.png" alt="FINET" /> */}
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar