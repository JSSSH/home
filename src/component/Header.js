import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/fblist">리스트</Nav.Link>
            <Nav.Link href="/fbwrite">글작성</Nav.Link>
            <Nav.Link href="/fbdetail">상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;