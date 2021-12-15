
import Link from "next/dist/client/link"
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand className={'pt-0'}>InstaBand</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/dashboard" passHref>
                            <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                        <Link href="/search" passHref>
                            <Nav.Link>Explore</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
