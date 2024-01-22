import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h1>Te presentamos todos nuestros proyectos</h1>
        <p>¡Tenemos proyectos personalizados para todo tipo de ambiente!</p>
      </div>
    </div>
  );
};

export default Hero;
