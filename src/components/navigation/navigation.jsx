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
// import Link from "next/link";
// import styles from "./Navigation.module.css";
// import Image from "next/image";
// import Banner from "../../../public/image/banner2.png";

// const links = [
//   {
//     label: "Home",
//     route: "/",
//   },
//   {
//     label: "About",
//     route: "/about",
//   },
//   {
//     label: "Projects",
//     route: "/project",
//   },
// ];

// export default function Navigation() {
//   return (
//     <div>
//       <header className={styles.header}>
//         <nav>
//           <ul className={styles.nav}>
//             {links.map(({ label, route }) => (
//               <li key={route}>
//                 <Link className={styles.link} href={route}>
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>
//       <div className={styles.banner}>
//         {/* <div className={styles.bannerTitle}>
//           <h1>Hola</h1>
//         </div> */}
//         {/* <div className={styles.bannerImage}>
//           <Image src={Banner} alt="banner img" className={styles.image} />
//         </div> */}
//       </div>
//     </div>
//   );
// }
//<nav>
//{/* <ul className={styles.nav}>
//{links.map(({ label, route }) => (
//<li key={route}>
// <Link className={styles.link} href={route}>
// {label}
//</Link>
// </li>
//))}
//</ul> */}
//</nav>
