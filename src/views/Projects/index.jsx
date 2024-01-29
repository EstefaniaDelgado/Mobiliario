import { Outlet } from "react-router-dom";
import styles from "./Projects.module.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "../../components/NavBar";
import LivingRoom from "../../assets/furniture/living-room.jpg";
import { useEffect, useState } from "react";

const cardsInformation = [
  {
    id: 1,
    title: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom,
  },
  {
    id: 2,
    title: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom,
  },
  {
    id: 3,
    title: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom,
  },
  {
    id: 4,
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit sed consequatur corporis, pariatur soluta.",
    image: LivingRoom,
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /* Carrusel para movil */
  }
  const carouselMobile = (
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
  );

  {
    /* Carrusel para desktop */
  }
  const carouselDesktop = (
    <Carousel>
      {cardsInformation.reduce((accumulator, currentCard, index, array) => {
        if (index % 2 === 0) {
          const nextCard = array[index + 1];
          const cards = nextCard ? [currentCard, nextCard] : [currentCard];

          accumulator.push(
            <Carousel.Item
              key={`item cards: ${currentCard.id} ${
                nextCard ? nextCard.id : ""
              }`}
            >
              <div className={styles.cardContainer}>
                {cards.map((card) => (
                  <Card
                    key={`card: ${card.id}`}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                ))}
              </div>
            </Carousel.Item>
          );
        }
        return accumulator;
      }, [])}
    </Carousel>
  );

  return (
    <div>
      <NavBar />
      <Hero />
      <section>
        <h2 className={styles.subtitle}>PROYECTOS</h2>
      </section>
      {isMobile ? carouselMobile : carouselDesktop}
      <Outlet />
    </div>
  );
};

export default Projects;
