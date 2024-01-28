import React from "react";
import styles from "./Detail.module.css";
import PropTypes from "prop-types";

const Detail = ({ changeState, images, projectId }) => {
  console.log(projectId - 1)
  // let state = true
  return (
    <div className={styles.overlay}>
      <div className={styles.generalContainer}>
        {images[projectId] &&
          images[projectId].map((e, index) => (
            <div key={`Image: ${index}`}>
              <img src={e} alt="" />
            </div>
          ))}
        {/* <div className={styles.containerImage1}></div>
        <div className={styles.containerImage2}></div>
        <div className={styles.containerImage3}></div>
        <div className={styles.containerImage4}></div>
        <div className={styles.containerImage5}></div>
        <div className={styles.containerImage6}></div> */}
      </div>
    </div>
  );
};

Detail.protoTypes = {
  images: PropTypes.array.isRequired,
  map: PropTypes.func,
  changeState: PropTypes.func,
  projectId: PropTypes.number,
};

export default Detail;
