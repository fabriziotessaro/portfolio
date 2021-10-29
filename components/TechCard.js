import Image from "next/image";

//react-icons
import {
  SiCss3,
  SiNodedotjs,
  SiSocketdotio,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiGithub
} from "react-icons/si";

import styles from "../styles/TechCard.module.css";
import me from "../public/images/me.jpg";

export default function TechCard({techName}){

    return (
        <div className={styles.techCard}>
            {techName === "CSS3"
                ? <SiCss3 className={styles.icon}/>
                : techName === "NodeJS"
                ? <SiNodedotjs className={styles.icon}/>
                : techName === "Socket.io"
                ? <SiSocketdotio className={styles.icon}/>
                : techName === "MongoDB"
                ? <SiMongodb className={styles.icon}/>
                : techName === "ReactJS"
                ? <SiReact className={styles.icon}/>
                : techName === "NextJS"
                ? <SiNextdotjs className={styles.icon}/>
                : techName === "Javascript"
                ? <SiJavascript className={styles.icon}/>
                : techName === "HTML5"
                ? <SiHtml5 className={styles.icon}/>
                : techName === "ReduxJS"
                ? <SiRedux className={styles.icon}/>
                : techName === "PostgreSQL"
                ? <SiPostgresql className={styles.icon}/>
                : techName === "ExpressJS"
                ? <SiExpress className={styles.icon}/>
                : techName === "Git"
                ? <SiGit className={styles.icon}/>
                : techName === "GitHub"
                ? <SiGithub className={styles.icon}/>
                : <></>
            }
            <h3>{techName}</h3>
        </div>
    )
}