import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';


const Header = () => {

    const { user, LogOut } = useContext(AuthContext);
    const handelLogOut = () => {
        LogOut()
            .then(res => {

            })
            .then(er => {

            })
    }

    return (
        <Navbar collapseOnSelect className='mb-6' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand ><Link to='/'>News-Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <Button variant='light' onClick={handelLogOut}>Log Out</Button>
                                    </> :
                                    <>
                                        <Link className='me-2' to='/login'>Login</Link>
                                        <Link to='/register'>Register &nbsp;</Link>
                                    </>
                            }

                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image
                                        roundedCircle
                                        src={user?.photoURL}
                                        style={{ height: '60px' }}>

                                    </Image> : <FaUserCircle />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;