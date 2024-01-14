import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PictureAboutUs from '../../assets/about-us.jpg';

const AboutUs = () => {
  return (
    <Card className='w-100 border-0' >
         <Card.Title className='text-align-center'>Card Title</Card.Title>
      <Card.Body className="d-flex justify-content-flex-start align-items-start">
        <Card.Img  src={PictureAboutUs}  className='w-50'/>
       
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutUs;
