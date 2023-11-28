import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoVivanti from '../assets/logo-vivanti.svg'

const NavbarComp = () => {
  return (
    <div>
         <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
      <Container>
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
        </Container>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#action2">Proyectos</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
            <Nav.Link href="#action2">Clientes</Nav.Link>
          {/*   <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavbarComp;
