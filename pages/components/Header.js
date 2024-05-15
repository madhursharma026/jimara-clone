import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../public/logo.png';
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import style from "../../styles/global.module.css";
import styles from "../../styles/Header.module.css";

function Header() {
    const [isOpenHome, setIsOpenHome] = useState(false);
    const handleMouseEnterHome = () => { setIsOpenHome(true); };
    const handleMouseLeaveHome = () => { setIsOpenHome(false); };
    const [isOpenPages, setIsOpenPages] = useState(false);
    const handleMouseEnterPages = () => { setIsOpenPages(true); };
    const handleMouseLeavePages = () => { setIsOpenPages(false); };
    const [isOpenBlog, setIsOpenBlog] = useState(false);
    const handleMouseEnterBlog = () => { setIsOpenBlog(true); };
    const handleMouseLeaveBlog = () => { setIsOpenBlog(false); };
    const [isOpenCauses, setIsOpenCauses] = useState(false);
    const handleMouseEnterCauses = () => { setIsOpenCauses(true); };
    const handleMouseLeaveCauses = () => { setIsOpenCauses(false); };
    const [isOpenShop, setIsOpenShop] = useState(false);
    const handleMouseEnterShop = () => { setIsOpenShop(true); };
    const handleMouseLeaveShop = () => { setIsOpenShop(false); };
    const [isOpenContact, setIsOpenContact] = useState(false);
    const handleMouseEnterContact = () => { setIsOpenContact(true); };
    const handleMouseLeaveContact = () => { setIsOpenContact(false); };

    return (
        <Navbar expand="lg" className={`pb-0 ${style.mainBg}`}>
            <Container fluid className={`${style.containerWidth} px-3`}>
                <Navbar.Brand className='mt-2 pb-0'>
                    <Link href='#'>
                        <Image src={logo} alt="#ImgNotFound" width={'100%'} height={'100%'} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-lg-flex d-none" style={{ marginLeft: '9%' }}>
                        <Dropdown show={isOpenHome} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Home
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenPages} onMouseEnter={handleMouseEnterPages} onMouseLeave={handleMouseLeavePages}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Pages
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenBlog} onMouseEnter={handleMouseEnterBlog} onMouseLeave={handleMouseLeaveBlog}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Blog
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenCauses} onMouseEnter={handleMouseEnterCauses} onMouseLeave={handleMouseLeaveCauses}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Causes
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenShop} onMouseEnter={handleMouseEnterShop} onMouseLeave={handleMouseLeaveShop}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Shop
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenContact} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Contact
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav className="me-auto d-lg-none d-flex py-4">
                        <Dropdown show={isOpenHome} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Home
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenPages} onMouseEnter={handleMouseEnterPages} onMouseLeave={handleMouseLeavePages}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Pages
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenBlog} onMouseEnter={handleMouseEnterBlog} onMouseLeave={handleMouseLeaveBlog}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Blog
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenCauses} onMouseEnter={handleMouseEnterCauses} onMouseLeave={handleMouseLeaveCauses}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Causes
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenShop} onMouseEnter={handleMouseEnterShop} onMouseLeave={handleMouseLeaveShop}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Shop
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown show={isOpenContact} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className={`border-0 mx-1 ${styles.DropdownStyle} text-white`}>
                                Contact
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav className="justify-content-end pb-lg-0 pb-4">
                        <h5 className="p-2 d-xl-block d-none"><i className="text-white fa fa-facebook-f"></i></h5>
                        <h5 className="p-2 d-xl-block d-none"><i className="text-white fa fa-instagram"></i></h5>
                        <h5 className="p-2 d-xl-block d-none"><i className="text-white fa fa-twitter"></i></h5>
                        <h5 className="p-2 d-xl-block d-none"><i className="text-white fa fa-youtube-play"></i></h5>
                        <Button variant="warning" className={`px-xl-4 px-3 py-2 ms-xl-3 ${styles.DonateBtn}`}>Donate Now</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

