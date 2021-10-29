import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

//react-icons
import { BsArrowRight } from "react-icons/bs";

export default function ProjectCard({ id, name, shortDescription, pictures }){
	return (
		<div className={styles.container}>
			<div className={styles.picture}>
				<Image
					quality={100}
			        objectFit="cover"
                    layout="fill"
			        src={pictures[0]}
			        alt={name}
				/>
			</div>
			<div className={styles.content}>
				<h3>{name}</h3>
				<div className={styles.border}></div>
				<p>{shortDescription}</p>
				<button>
					View more
					<BsArrowRight size={"2rem"}/>
				</button>
			</div>
		</div>
	)
}