import Head from "next/head";

import projects from "../../myProjects.json";
import styles from "../../styles/Project.module.css";
import ProjectDetail from "../../components/ProjectDetail";

export default function Home({ project }) {
  
  return (
    <>
      <Head>
        <title>{project.name || "Projects"} | Fabrizio Tessaro</title>
      </Head>
      <main className={styles.container}>
        
        <ProjectDetail {...project} />
        <div></div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const project = projects.find((project) => project.id === Number(id));

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: String(project.id) },
  }));

  return { paths, fallback: "blocking" };
}