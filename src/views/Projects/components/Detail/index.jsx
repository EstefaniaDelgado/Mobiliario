import React from "react";
import styles from "./Detail.module.css";
import PropTypes from "prop-types";
import CloseIcon from "../../../../assets/icons/close.svg";

// imagenes para detalles de Projecto
import Bed from "../../../../assets/furniture/bed.jpg";
import Decoration from "../../../../assets/furniture/decoration.jpg";
import DiningRoom from "../../../../assets/furniture/dining-room.jpg";
import Hero from "../../../../assets/furniture/hero-projects.jpg";
import Kitchen from "../../../../assets/furniture/kitchen.jpg";
import LivingRoom from "../../../../assets/furniture/living-room.jpg";
import { useNavigate } from "react-router-dom";

const imagesDetail = [
  [Bed, Decoration, DiningRoom, Hero, Kitchen, LivingRoom],
  [Bed, Decoration, DiningRoom, Hero, Kitchen, LivingRoom]
];

const Detail = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/proyectos");
  };

  return (
    <div className={styles.overlay}>
      <button className={styles.buttonClose}>
        <img src={CloseIcon} alt="Close Icon" onClick={handleClick} />
      </button>
      <div className={styles.generalContainer}>
        {imagesDetail[0].map((image, index) => (
          <div
            key={`image: ${index}`}
            className={styles.containerImage}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

Detail.protoTypes = {
  images: PropTypes.array,
  map: PropTypes.func,
  changeState: PropTypes.func,
  projectId: PropTypes.number,
};

export default Detail;
