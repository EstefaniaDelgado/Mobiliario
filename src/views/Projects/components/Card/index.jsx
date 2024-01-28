import { useState } from "react";
import LivingRoom from "../../../../assets/furniture/living-room.jpg";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`detalle/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        <img
          src={LivingRoom}
          alt="Living Room"
          className={styles.carouselImage}
        />
      </div>
      <div className={styles.description}>
        <p>{title}</p>
        <p>{description}</p>
        <p>{image}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default Card;
