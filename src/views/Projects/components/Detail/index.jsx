import React from "react";
import styles from "./Detail.module.css";
import PropTypes from "prop-types";
import CloseIcon from "../../../../assets/icons/close.svg";
// imagenes para detalles de Projecto
import BabyGroot from "../../../../assets/image/baby_groot.jpg";
import Batman from "../../../../assets/image/batman.jpg";
import MilesMorales from "../../../../assets/image/miles_morales.jpg";
import Neon from "../../../../assets/image/neon.jpg";
import Paisaje from "../../../../assets/image/paisaje.jpg";
import Luna from "../../../../assets/image/luna.jpg";
import { useNavigate } from "react-router-dom";

const imagesDetail = [
  [BabyGroot, Batman, MilesMorales, Neon, Paisaje, Luna],
  [BabyGroot, Batman, MilesMorales, Neon, Paisaje, Luna],
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
