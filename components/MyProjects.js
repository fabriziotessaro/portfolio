
// projects cards
import ProjectCard from "./ProjectCard";

import styles from "../styles/MyProjects.module.css";

export default function MyProjects({ myProjects }){
	return (
		<section id="myprojects" className={styles.container}>
			<div className={styles.title}>
				<h1>My Projects</h1>
			</div>
			<div className={styles.content}>
				<div className={styles.collection}>
					{myProjects?.map((project) => 
						<ProjectCard key={project.id} {...project}/>
					)}
					<ProjectCard key={2} {...myProjects[0]}/>
					<ProjectCard key={3} {...myProjects[0]}/>
					<ProjectCard key={4} {...myProjects[0]}/>
					<ProjectCard key={5} {...myProjects[0]}/>
					<ProjectCard key={6} {...myProjects[0]}/>
					<ProjectCard key={7} {...myProjects[0]}/>
				</div>
			</div>
		</section>
	)
}