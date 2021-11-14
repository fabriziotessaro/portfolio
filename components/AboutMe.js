import Image from "next/image";

//react-icons
import { 
    BsLinkedin,
    BsGithub,
    BsArrowRight,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/AboutMe.module.css";
import me from "../public/images/me.jpg";

export default function AboutMe(){
    return (
        <section id="aboutme" className={styles.container}>
            <div className={styles.aboutMeCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.photo}>
                        <Image 
                            src={me} 
                            alt="My Photo" 
                            quality={100}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL="/placeholder-2.png"
                        />
                    </div>
                    <div className={styles.social}>
                        <a 
                            href="https://linkedin.com/in/fabrizio-tessaro" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="Linkedin"
                        >
                            <BsLinkedin className={styles.icon}/>
                        </a>
                        <a 
                            href="https://github.com/fabriziotessaro" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub"
                        >
                            <BsGithub className={styles.icon}/>
                        </a>
                        <a 
                            href="mailto:fabriziotessaro02@gmail.com" 
                            aria-label="Email"
                        >
                            <GrMail className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h2>About Me</h2>
                            <h3>I'm Fabrizio Tessaro</h3>
                        </div>
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
                    </div>
                    
                    <div className={styles.cvButton}>
                        <a 
                            href="/Fabrizio_Tessaro_CV.pdf"
                            target="_blank" 
                            rel="noreferrer" 
                        >
                            <h2>Get Curriculum</h2> 
                            <BsArrowRight size={"2.5rem"}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}