import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description',
}

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.jpg" alt="" fill />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Fale conosco!</h1>
        <h2 className={styles.subtitle}>
          BALCÕES DE ATENDIMENTO E PONTOS DE VENDA DA FOZ DO IGUAÇU TOURS

        </h2>
        <p className={styles.desc}>
          O hotel em que você está hospedado provavelmente contém um posto de atendimento Foz do Iguaçu Tours. Verifique na recepção do seu hotel para nos encontrar!
        </p>
        <p className={styles.desc}>Caso o seu hotel não conte com nosso atendimento, você pode entrar em contato com nossa central telefônica. Qualquer dúvida, informação, elogio ou reclamação podem ser feitos direto em nossos pontos de atendimento.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Central Telefônica</h1>
            <p>45-3521-4000</p>
          </div>
          <div className={styles.box}>
            <h1>Whatsapp</h1>
            <p>45-3521-4000</p>
          </div>
          <div className={styles.box}>
            <h1>E-mail</h1>
            <p>info@fozdoiguacu.com</p>
          </div>

        </div>
      </div>



    </div>
  );
};

export default ContactPage;