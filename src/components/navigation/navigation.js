import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import './navigation.css';
import brandIcon from '../../assets/TMDB.svg';
import plusIcon from '../../assets/plus.svg';
import searchIcon from '../../assets/search.svg';


const Navigation = () => {
  return (
    <Container fluid className="px-0 navigation__wrapper px-4">
      <Container>
        <Row>
          <Col className="px-0 px-lg-3">
            <Navbar expand="lg" className="navbar" bsPrefix="navbar">
              <Container fluid className="px-0 px-lg-4">
                <Navbar.Brand href="#" className="ps-2"><img src={brandIcon} style={{ width: "154px" }} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0 ps-2 ps-lg-0"
                  >
                    <Nav.Link href="#action1">Movies</Nav.Link>
                    <Nav.Link href="#action2">TV Shows</Nav.Link>
                    <Nav.Link href="#action3">People</Nav.Link>
                    <Nav.Link href="#action4">More</Nav.Link>
                  </Nav>
                  <div className="d-flex navbar__right">
                    <Nav.Link href="#action1" className="ps-2 ps-lg-3"><img src={plusIcon} style={{ width: "20px" }} alt="plus" /></Nav.Link>
                    <Nav.Link href="#action1"><span className="language-link">EN</span></Nav.Link>
                    <Nav.Link href="#action4">Login</Nav.Link>
                    <Nav.Link href="#action4">Join TMDB</Nav.Link>
                    <Nav.Link href="#action4"><img src={searchIcon} style={{ width: "25px" }} alt="search" /></Nav.Link>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}

export default Navigation;