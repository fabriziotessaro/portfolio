//react-icons
import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,
    IoLogoNodejs,
    IoLogoFigma,
} from "react-icons/io5";
import { 
    SiMongodb,
    SiExpress,
    SiPostgresql,
    SiRedux,
    SiGithub,
 } from "react-icons/si";
 import { FaGitAlt } from "react-icons/fa";

import styles from "../styles/AboutMe.module.css";

export default function AboutMe(){
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>About me</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.aboutMe}>
                    <div className={styles.description}>
                        <p>Me destaco por mi optimismo, no importa que problema o dificultad enfrente siempre pondré buena cara y trabajaré para superarlo. Me gusta aplicar esto en mi ámbito profesional como desarrollador web, siempre aprendiendo nuevas tecnologías y maneras de resolver problemas.
                            <br/><br/>
                            El desarrollo web me encanta, es un mundo lleno de posibilidades que siempre está cambiando y evolucionando, brindando millones de servicios y soluciones a miles de millones de personas.
                            <br/><br/>
                            Actualmente, domino el MERN Stack, con MongoDB/PostrgreSQL, ReactJS, ExpressJS y NodeJS.
                            <br/><br/>
                            Mis intereses son: no dejar de instruirme y aprender cosas nuevas, así como también enfrentarme a distintos y difíciles desafíos que me llenen de experiencia y con los cuales poder demostrar todo de lo que soy capaz. Me gustaría encontrar un lugar en el que poder hacer todo eso acompañado de un equipo con el que poder trabajar codo a codo.
                        </p>
                    </div>
                    <div className={styles.curriculum}>
                        <button>Fabrizio Tessaro.pdf</button>
                    </div>
                </div>
                <div className={styles.skills}>

                    <div className={styles.tech}>
                        <h2>Technologies</h2>
                        <div className={styles.techList}>
                            <IoLogoJavascript className={styles.icon}/>
                            <IoLogoHtml5 className={styles.icon}/>
                            <IoLogoCss3 className={styles.icon}/>
                            <IoLogoReact className={styles.icon}/>
                            <SiRedux className={styles.icon}/>
                            <IoLogoNodejs className={styles.icon}/>
                            <SiExpress className={styles.icon}/>
                            <SiPostgresql className={styles.icon}/>
                            <SiMongodb className={styles.icon}/>
                            
                            <FaGitAlt className={styles.icon}/>
                            <SiGithub className={styles.icon}/>
                            <IoLogoFigma className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.soft}>
                        <h2>Qualities</h2>
                        <div className={styles.qualities}>
                            <h4>Self-taught</h4>
                            <h4>Fast learning</h4>
                            <h4>Problems Resolution</h4>
                            <h4>Teamwork</h4>
                            <h4>Self-sufficient</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}