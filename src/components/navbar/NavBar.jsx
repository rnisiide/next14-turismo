import Links from "./links/links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>

            <Link href="/" className={styles.logo}>
                <img src="/logo.png" alt="" className={styles.logoImg} />
            </Link>



            <div>
                <Links />
            </div>
        </div>

    );
};

export default Navbar;