import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

const Links = () => {
    const links = [
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Students",
            path:"/students",
        },
        {
            title:"Representatives",
            path:"/representatives",
        },
        {
            title:"Contact",
            path:"/contact",
        },
    ];
    

    // TEMPORARY LOGIC FOR LOGIN PAGE //
    const session = true
    const isAdmin = true

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}{
/*                session ? (
                    <>
                    {
                        isAdmin && (
                            <NavLink item={{title: "Admin", path: "/admin"}}/>
                        )
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )
            */            }
        </div>
    )
}

export default Links