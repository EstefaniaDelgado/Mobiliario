import styles from './Testimonials.module.css'
import Testimonial from './components/CardTestimonial';
import seriesData from '../../data/testimonials'
console.log(seriesData)



const Testimonials = () => {

  
  return (
   <section>
    <h2 className={styles.subtitle}>Testimonios</h2>
    <Testimonial slides={seriesData}/>
   </section>
  );
}

export default Testimonials;
