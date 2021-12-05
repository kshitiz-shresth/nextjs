
import Link from "next/dist/client/link"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>InstaBand</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/dashboard" passHref>
                            <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                        <Link href="/new" passHref>
                            <Nav.Link>New</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
