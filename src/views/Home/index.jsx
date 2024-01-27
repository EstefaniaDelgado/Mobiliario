import NavbarComp from '../../components/NavBar';
import AboutUs from '../../components/AboutUs';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import HeroLandingPage from '../../components/HeroLandingPage';
import Products from '../../components/Products';

const Home = () => {
  return (
    <>
      <NavbarComp />
      <HeroLandingPage/>
      <AboutUs />
      <Services />
      <Products/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;
