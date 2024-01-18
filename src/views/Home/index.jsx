import NavbarComp from '../../components/NavBar';
import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Header />
      <AboutUs />
      <Services />
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Home;
