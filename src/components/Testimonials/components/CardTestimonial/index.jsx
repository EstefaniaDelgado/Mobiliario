import styles from './Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from 'react';

const Testimonial = ({ slides }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const tabletScreem = (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.containerCarousel}>
            <img
              src={`https://unavatar.io/${slide.customer}`}
              alt="Testimonio"
              className={styles.imageCarousel}
            />
            <p className={styles.review}>{slide.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const mobileScreem = (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.containerCarousel}>
            <img
              src={`https://unavatar.io/youtube/${slide.customer}`}
              alt="Testimonio"
              className={styles.imageCarousel}
            />
            <p className={styles.review}>{slide.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return <>{isMobile ? mobileScreem : tabletScreem}</>;
};

export default Testimonial;
