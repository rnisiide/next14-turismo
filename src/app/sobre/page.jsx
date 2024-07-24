import Image from "next/image";
import styles from "./sobre.module.css";

export const metadata = {
    title: "Sobre o IguTours",
    description: "Descrição sobre a IguTours",
};



const AboutPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sobre a Foz do Iguaçu Tours</h2>
                <h1 className={styles.title}>
                    Os melhores passeios e eventos em Foz do Iguaçu
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem vero? Assumenda voluptate deserunt maiores, corrupti, laboriosam repudiandae architecto, culpa illum expedita hic soluta velit eius dolor voluptates quae doloribus?
                </p>

            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/sobrenos-img1.png"
                    alt="About Image"
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    );
};

export default AboutPage;