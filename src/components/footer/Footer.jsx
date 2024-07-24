import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Ricardo Nisiide ®</div>
            <div className={styles.text}>
                Desenvolvido por: <a className={styles.link} href="https://github.com/rnisiide"> Ricardo Nisiide
                </a>
                |
                <a className={styles.link} href="https://github.com/rnisiide/next14-turismo">Código Github
                </a>
            </div>
        </div>
    );
};

export default Footer;
