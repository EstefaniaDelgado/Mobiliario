import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import LivingRoom from '../../assets/furniture/living-room.jpg'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div>
       <Carousel >
      <Carousel.Item>
        <img src={LivingRoom} alt="Living Room" className={styles.carouselImage}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={LivingRoom} alt="Living Room" className={styles.carouselImage}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={LivingRoom} alt="Living Room" className={styles.carouselImage} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Header
