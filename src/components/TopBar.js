import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#departments'>Departments</NavDropdown.Item>
                    <NavDropdown.Item href='#shop'>More ways to shop</NavDropdown.Item>
                    <NavDropdown.Item href='#help'>Help</NavDropdown.Item>
                </NavDropdown>

                <Navbar.Brand href="#home">
                    <img src='instacart-logo.svg'></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <input style={{width:'300px', height: '40px', borderRadius:'7px', backgroundColor:'#F6F7F8', boxShadow:'0 2px 4px 0 #b4b4b4 inset', border:'none'}}placeholder='Search products and stores'></input>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className = 'me-auto'>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}
