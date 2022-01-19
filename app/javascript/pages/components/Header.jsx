import React from "react"
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from "react-router-dom"

export default Header = () => {
return (
<Navbar className="px-4" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>
        <img
        src={require('../../assets/header.svg')}
        width="30"
        height="30"
        className="d-inline-block align-top bg-danger rounded"
        alt="React Bootstrap logo"
        /> D&D Inventory
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
)
}