import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import Banner from "../../../public/image/banner3.png";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";

export default function Navigation() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.bannerImage}>
          <Image src={Banner} alt="banner img" className={styles.image} />
          <nav className={styles.iconNav}>
            <ul className={styles.iconList}>
              <li>
                <Link href="/" className={styles.iconLink}>
                  <FaHome className={styles.iconHome} />
                  <span className={styles.iconHomeText}>Principal</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.iconLink}>
                  <FaUser className={styles.iconUser} />
                  <span className={styles.iconUserText}>Sobre Mi</span>
                </Link>
              </li>
              <li>
                <Link href="/project" className={styles.iconLink}>
                  <FaFolderOpen className={styles.iconFolder} />
                  <span className={styles.iconFolderText}>Proyectos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
