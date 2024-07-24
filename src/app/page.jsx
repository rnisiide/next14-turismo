import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return <div className={styles.container}>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>Os melhores passeios em Foz do Iguaçu</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam exercitationem animi fugiat officiis, neque nostrum et provident reprehenderit, quos itaque commodi praesentium? Culpa magnam reiciendis pariatur adipisci porro nihil.
      </p>


    </div>

    <div className={styles.imageContainer}>
      <Image src="/oquefazer.png" alt="" fill className={styles.heroImg} />



    </div>

  </div>;
};

export default Home;

