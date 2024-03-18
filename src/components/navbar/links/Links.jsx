import Link from "next/link";

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
        {
            title:"Log In",
            path:"/login",
        },
    ]

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links