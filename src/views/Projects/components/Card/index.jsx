import LivingRoom from "../../../../assets/furniture/living-room.jpg";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({title, description, image}) => {
  return (
    <div className={styles.card}>
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
};

export default Card;
