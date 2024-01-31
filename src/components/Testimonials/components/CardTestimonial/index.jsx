import styles from './Testimonial.module.css'

const Testimonial = () => {
  return (
    <div class="carousel">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one">
          <div>
            <h2>1 Series</h2>
            <a>explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--two">
          <div>
            <h2>2 Series</h2>
            <a>explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--three">
          <div>
            <h2>3 Series</h2>
            <a>explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--four">
          <div>
            <h2>4 Series</h2>
            <a>explore</a>
          </div>
        </div>

        <div class="swiper-slide swiper-slide--five">
          <div>
            <h2>5 Series</h2>
            <a>explore</a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  )
}

export default Testimonial
