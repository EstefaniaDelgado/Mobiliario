import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { useState } from "react";
import Detail from "./components/Detail";

const array = [
  { id: 1, title: "titulo 1", description: "descripcion 1", image: "url 1" },
  { id: 2, title: "titulo 2", description: "descripcion 2", image: "url 2" },
];

const Projects = () => {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div>
      <h1 className={styles.title}>Proyectos 🔨</h1>
      <Hero />
      <section>
        <h2 className={styles.subtitle}>PROYECTOS</h2>
      </section>

      {/* Carrusel para movil */}
      <Carousel>
        {array.map((e) => (
          <Carousel.Item key={`item card: ${e.id}`}>
            <section className={styles.cardContainer}>
              <Card
                id={e.id}
                title={e.title}
                description={e.description}
                image={e.image}
              />
            </section>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Carrusel para vista grande */}
      <Outlet />

      {/* Superposición de galería para Modal */}
      {/* <Detail
        project={selectedProject}
        state={modalState}
        changeState={setModalState}
      /> */}
    </div>
  );
};

export default Projects;
