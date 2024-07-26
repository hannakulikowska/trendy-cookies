import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-primary py-4">
      <Container>
        <Navbar.Brand href="/">
          <svg width="151" height="20" xmlns="http://www.w3.org/2000/svg">
            <image href="/logo.svg" width="151" height="20" />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-lg-5 pt-5 pb-2 p-lg-0">
            <Nav.Link className="text-light" href="#catalog">
              Catalog
            </Nav.Link>
            <Nav.Link className="text-light" href="#about">
              About us
            </Nav.Link>
            <Nav.Link className="text-light" href="#order">
              Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
