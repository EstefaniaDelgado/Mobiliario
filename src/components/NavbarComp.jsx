import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoVivanti from '../assets/logo-vivanti.svg'
import { Col, Row } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <header>
         <Navbar expand="sm" className="bg-body-tertiary">
      <Container fluid>
     <Row className='w-100 align-items-center m-0'>
      <Col>
      <Container className='d-flex justify-content-between align-items-center'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LogoVivanti}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Mobiliario Vivanti
          </Navbar.Brand>
          {/* icon burger */}
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
        </Col>
        
        {/* select & searchbar */}
        <Col className='d-flex gap-2 align-items-center'>
    <NavDropdown title="Seleccionar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>  
      
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Col>

        <Col>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Nosotros</Nav.Link>
            <Nav.Link href="#action2">Proyectos</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
            <Nav.Link href="#action2">Clientes</Nav.Link>
            
       
          </Nav>
       
        </Navbar.Collapse>
        </Col>


        </Row>
      </Container>
    </Navbar>
      
    </header>
  )
}

export default NavbarComp;
