// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import PictureAboutUs from "../../assets/about-us.jpg";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section>
      <h2 className={styles.subtitle}>SOBRE NOSOTROS</h2>
      <div className={styles.cardContainer}>
        <section className={styles.card}>
          <article className={styles.containerImageCard}>
            <img
              className={styles.imageCard}
              src={PictureAboutUs}
              alt="Sobre Nosotros"
            />
          </article>
          <article className={styles.descriptionContainer}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, recusandae ratione nam amet, odio ipsa dolorum
              tenetur suscipit veniam voluptate similique quod, delectus
              asperiores aperiam nesciunt molestias! Nemo, perferendis laborum.
              Magnam cum earum nam nostrum, quaerat molestiae itaque error iste
              doloribus atque nemo. Optio ipsam, quo iusto nemo ipsum
              perspiciatis nisi architecto odio ducimus consequuntur expedita
              eaque et. Temporibus, unde? Libero, quas? Reprehenderit atque ea
              dolorum animi repellendus, quos nulla, at laudantium tempore
              cumque dolor, quasi optio consequuntur modi. Voluptate, provident
              repellendus quo eligendi sint sequi in tempora? Id, illum!
            </p>
          </article>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
