import styles from "./Footer.module.css";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <ul className={styles.link}>
          <div>
            <Link href="/">
              <p className={styles.logo}>AS</p>
            </Link>
          </div>
          <div className={styles.links}>
            <p className={styles.contact}>
              Contactame <br />
              por:
            </p>
            <li>
              <Link
                href="https://www.linkedin.com/in/adriana-sanchez-mejias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.linkedin} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Adri-ESM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={styles.github} />
              </Link>
            </li>
          </div>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
