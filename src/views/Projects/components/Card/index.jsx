import { useState } from "react";
import LivingRoom from "../../../../assets/furniture/living-room.jpg";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
import Detail from "../Detail";

// imagenes para detalles de Projecto
import BabyGroot from "../../../../assets/image/baby_groot.jpg";
import Batman from "../../../../assets/image/batman.jpg";
import MilesMorales from "../../../../assets/image/miles_morales.jpg";
import Neon from "../../../../assets/image/neon.jpg";
import Paisaje from "../../../../assets/image/paisaje.jpg";
import Luna from "../../../../assets/image/luna.jpg";

const imagesDetail = [
  [BabyGroot, Batman, MilesMorales, Neon, Paisaje, Luna],
  [BabyGroot, Batman, MilesMorales, Neon, Paisaje, Luna],
];

// si se envia el onClick desde el padre se recibe en props;
const Card = ({ title, description, image, id }) => {
  const [detailState, setDetailState] = useState(false);

  const handleClick = () => {
    // if (onClick) {
    //   onClick();
    // }
    setDetailState(true);
  };

  return (
    // <div className={styles.card} onClick={handleClick}>
    <div className={styles.card} onClick={handleClick}>
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
      {detailState && (
        <Detail
          changeState={setDetailState}
          images={imagesDetail}
          projectId={id}
        />
      )}
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
