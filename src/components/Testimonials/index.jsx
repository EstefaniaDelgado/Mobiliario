import styles from './Testimonials.module.css'
import seriesData from '../../data/testimonials'
import CardTestimonial from './components/CardTestimonial';




const Testimonials = () => {

  
  return (
   <section>
    <h2 className={styles.subtitle}>Testimonios</h2>
    <CardTestimonial slides={seriesData}/>
   </section>
  );
}

export default Testimonials;
