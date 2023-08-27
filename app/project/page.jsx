"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoTM from "../../public/logo/favicon.ico";
import LogoAF from "../../public/logo/adrisFoodLogo.png";

const ProjectsPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleImageClick = () => {
    setShowInfo(!showInfo);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.projectsContainer}>
      <div>
        <h1 className={styles.title}>Mis Trabajos Recientes</h1>
      </div>
      {/* TOOLSMATCH PROJECT */}
      <div className={styles.projectContainer}>
        <div
          className={styles.projectImageContainer}
          onClick={handleImageClick}
        >
          <Image
            src="/image/tmcel.png"
            alt="tools match image"
            className={`${styles.projectImage} ${
              showInfo ? styles.projectImageHidden : ""
            }`}
            width={200}
            height={200}
          />
          {showInfo && (
            <div className={styles.projectDescription}>
              <Link href="/project">
                <Image
                  src={LogoTM}
                  alt="adris food logo"
                  className={styles.projectLogo}
                  width={50}
                  height={50}
                  style={{ background: "black", borderRadius: "50%" }}
                />
                <h2 className={styles.projectTitle}>Tools Match</h2>
              </Link>
              <div className={styles.linksToolsM}>
                <Link
                  href="https://tools-match-eight.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.projectLinkWeb}
                  onClick={handleLinkClick}
                >
                  Ver Sitio Web
                </Link>
                <br />
                <Link
                  href="https://github.com/Jefersonsteven/tools-match"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.projectLinkRepo}
                  onClick={handleLinkClick}
                >
                  Ver Repositorio
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ADRIS'FOOD PROJECT */}
      <div className={styles.projectContainer1}>
        <div
          className={styles.projectImageContainer}
          onClick={handleImageClick}
        >
          <Image
            src="/image/afoodcel.png"
            alt="tools match image"
            className={`${styles.projectImage} ${
              showInfo ? styles.projectImageHidden : ""
            }`}
            width={200}
            height={200}
          />
          {showInfo && (
            <div className={styles.projectDescription}>
              {/* <Link> */}
              <Image
                src={LogoAF}
                alt="adris food logo"
                className={styles.projectLogo}
                width={50}
                height={50}
                style={{
                  background: "black",
                  borderRadius: "50%",
                }}
              />
              <h2 className={styles.projectTitle}>Adri&apos;s Food</h2>
              {/* </Link> */}
              <div className={styles.linksAFood}>
                <Link
                  href="https://front-pi-food-main.onrender.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.projectLinkWeb}
                  onClick={handleLinkClick}
                >
                  Ver Sitio Web
                </Link>
                <br />
                <Link
                  href="https://github.com/Adri-ESM/PI-Food-main/tree/main"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.projectLinkRepo}
                  onClick={handleLinkClick}
                >
                  Ver Repositorio
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

// "use client";
// import React, { useState } from "react";
// import styles from "./Projects.module.css";
// import Link from "next/link";
// import Image from "next/image";

// const ProjectsPage = () => {
//   const [showInfo, setShowInfo] = useState(false);

//   const handleImageClick = () => {
//     setShowInfo(!showInfo);
//   };

//   const handleLinkClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div className={styles.projectsContainer}>
//       <div className={styles.projectContainer}>
//         <div
//           className={styles.projectImageContainer}
//           onClick={handleImageClick}
//         >
//           <Image
//             src="/image/tmcel.png"
//             alt="tools match image"
//             className={`${styles.projectImage} ${
//               showInfo ? styles.projectImageHidden : ""
//             }`}
//             width={200}
//             height={200}
//           />
//           {showInfo && (
//             <div className={styles.projectDescription}>
//               <h2 className={styles.projectTitle}>Tools Match</h2>
//               <div className={styles.linksToolsM}>
//                 <Link
//                   href="https://tools-match-eight.vercel.app/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                   className={styles.projectLinkWeb}
//                   onClick={handleLinkClick}
//                 >
//                   View Website
//                 </Link>
//                 <Link
//                   href="https://github.com/Jefersonsteven/tools-match"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                   className={styles.projectLinkRepo}
//                   onClick={handleLinkClick}
//                 >
//                   View Repository
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;
