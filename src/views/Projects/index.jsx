import { Outlet} from "react-router-dom";
import styles from "./Projects.module.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "../../components/NavBar";
import LivingRoom from "../../assets/furniture/living-room.jpg";

const cardsInformation = [
  {
    id: 1,
    title: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom
  },
  {
    id: 2,
    title: "Proyecto 2",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom
  },
];

const Projects = () => {

  return (
    <div>
      <NavBar />
      <Hero />
      <section>
        <h2 className={styles.subtitle}>PROYECTOS</h2>
      </section>

      {/* Carrusel para movil */}
      <Carousel>
        {cardsInformation.map((e) => (
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
