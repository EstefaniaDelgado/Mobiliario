import { Outlet } from "react-router-dom";
import styles from "./Projects.module.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./components/Card";
import Hero from "./components/Hero";

const array = [
  { id: 1, title: "titulo 1", description: "descripcion 1", image: "url 1" },
  { id: 2, title: "titulo 2", description: "descripcion 2", image: "url 2" },
];

const Projects = () => {
  return (
    <div>
        <h1 className={styles.title}>Proyectos 🔨</h1>
      <Hero />
      <section>
        <h2 className={styles.subtitle}>PROYECTOS</h2>
      </section>

      {/* Carrusel para movil */}
      <section className={styles.carouselContainer}>
        <Carousel>
          {array.map((e) => (
            <Carousel.Item key={`item card: ${e.id}`}>
              <section className={styles.cardsContainer}>
                <Card
                  title={e.title}
                  description={e.description}
                  image={e.image}
                />
              </section>
            </Carousel.Item>
          ))}
          {/* <Carousel.Item>
              <section className={styles.cardsContainer}>
                <article className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={LivingRoom}
                      alt="Living Room"
                      // className={styles.carouselImage}
                    />
                  </div>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </article>
                <article>
                  <img
                    src={LivingRoom}
                    alt="Living Room"
                    className={styles.carouselImage}
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </article>
              </section>
            </Carousel.Item>
            <Carousel.Item>
              <section className={styles.cardsContainer}>
                <article className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={LivingRoom}
                      alt="Living Room"
                      // className={styles.carouselImage}
                    />
                  </div>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </article>
                <article>
                  <img
                    src={LivingRoom}
                    alt="Living Room"
                    className={styles.carouselImage}
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </article>
              </section>
            </Carousel.Item> */}
        </Carousel>
      </section>

      {/* Carrusel para vista grande */}
      {/* <section></section> */}
      <Outlet />
    </div>
  );
};

export default Projects;
