"use client"
import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import Image from "next/image";

const links = [
    {
        title: "Home",
        path: "/",

    },
    {
        title: "Contato",
        path: "/contato",

    },
    {
        title: "Passeios",
        path: "/passeios",

    },
    {
        title: "Sobre",
        path: "/sobre",

    },
];

const Links = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link =>
                    <NavLink item={link} key={link} />

                ))}
            </div>
            <Image
                className={styles.menuButton}
                src='/menu.png'
                alt=''
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)} />
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>

    )
};

export default Links;