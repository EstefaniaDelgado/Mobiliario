import styles from './Testimonials.module.css'
import Testimonial from './components/CardTestimonial';


const Testimonials = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>Testimonios</h2>
      <Testimonial/>
    </div>
  )
}

export default Testimonials;
