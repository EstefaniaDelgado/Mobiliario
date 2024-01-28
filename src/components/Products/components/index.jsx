import styles from './Product.module.css'
import LivingRoom from '../../../assets/furniture/living-room.jpg'
import DiningRoom from '../../../assets/furniture/dining-room.jpg'

const Product = () => {
  return (
    <section className={styles.containerProducts}>
        <article className={styles.product}>
     <img src={LivingRoom} alt="Sala" className={styles.livingRoom} />
     </article>
     <article className={styles.product}>
     <img src={DiningRoom} alt="Sala" className={styles.livingRoom} />
     </article>
     <article className={styles.product}>
     <img src={DiningRoom} alt="Sala" className={styles.livingRoom} />
     </article>
     <article className={styles.product}>
     <img src={DiningRoom} alt="Sala" className={styles.livingRoom} />
     </article>

    </section>
  )
}

export default Product;
