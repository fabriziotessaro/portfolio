import Image from "next/image";

// react-icons
import { 
    BsLinkedin,
    BsGithub,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/Presentation.module.css";
import image from "../public/images/presentation-background.jpg";

export default function Presentation(){
    return (
        <section className={styles.container}>
            <div className={styles.presentation}>
                <div className={styles.name}>
                    <h3>Hello there! I&#8217;m</h3>
                    <h1>Fabrizio Tessaro</h1>
                    <h3>A Fullstack web developer</h3>
                </div>
                <div className={styles.description}>
                    <h4>
                        &#8220;I stand out for my optimism,<br/>
                        no matter what problem or difficulty I face,<br/>
                        always I&#8217;ll put a good face on and work to overcome it&#8221;.
                    </h4>
                </div>
                <div className={styles.social}>
                    <a href="https://linkedin.com/in/fabrizio-tessaro" target="_blank" rel="noreferrer" aria-label="Linkedin">
                        <BsLinkedin size={"2.5rem"}/>
                    </a>
                    <a href="https://github.com/fabriziotessaro" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <BsGithub size={"2.5rem"}/>
                    </a>
                    <a href="mailto:fabriziotessaro02@gmail.com" aria-label="Email">
                        <GrMail size={"2.5rem"}/>
                    </a>
                </div>
                <div className={styles.contactBtn}>
                    <button>Contact me</button>
                </div>
            </div>
            <div className={styles.image}>
                <Image 
                    src={image} 
                    alt="" 
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
        </section>
    )
}