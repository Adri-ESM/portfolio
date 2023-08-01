import styles from "./About.module.css";
import Image from "next/image";
import Adri from "../../public/image/adri3.png";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.titles}>
        <div className={styles.aboutTitle}>
          <h1>Hola, Soy Adri</h1>
        </div>
        <div className={styles.aboutSubTitle}>
          <h2>Desarrolladora Web</h2>
          <h2>¡Un gusto conocerte!</h2>
        </div>
      </div>
      <div className={styles.aboutImage}>
        <Image src={Adri} alt="Adri Foto" width="250" height="240" />
      </div>

      <div className={styles.aboutText}>
        <p>
          Soy una apasionada de la programación. Mi objetivo es crear
          experiencias digitales impactantes y funcionales que conecten con las
          personas. Me encanta aprender constantemente y mantenerme al tanto de
          las últimas tendencias en tecnología. El trabajo en equipo y la
          colaboración estrecha, es fundamental para asegurarme de que los
          objetivos y visiones se vean reflejados en cada proyecto que emprendo.
          Siempre estoy abierta a nuevos desafíos y oportunidades de
          crecimiento. <br />
          No dudes en ponerte en contacto conmigo si tienes alguna pregunta o si
          estás interesado en que yo colabore en un proyecto emocionante. <br />
          ¡Estoy ansiosa por formar parte de tu éxito en el mundo digital!
        </p>
      </div>
      <Link href="/form" className={styles.button}>
        <button className={styles.buttonForm}>Coversemos</button>
      </Link>
    </div>
  );
}
