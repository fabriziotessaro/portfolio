import Head from "next/head";
import { useState } from "react";

import projects from "../../myProjects.json";
import styles from "../../styles/Project.module.css";
import ProjectDetail from "../../components/ProjectDetail";
import ProjectImages from "../../components/ProjectImages";

export default function Home({ project }) {
  const [selectedImage, setSelectedImage] = useState(project.pictures[0]);

  const handleImage = (img) => {
    setSelectedImage(img);
  };

  return (
    <>
      <Head>
        <title>{project.name || "Projects"} | Fabrizio Tessaro</title>
      </Head>
      <main className={styles.container}>
        
        <ProjectDetail {...project} />
        <ProjectImages 
          selectedImage={selectedImage}
          name={project.name}
          imagesCollection={project.pictures}
          handleImage={handleImage}
          placeholder={project.placeholder}
        />
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