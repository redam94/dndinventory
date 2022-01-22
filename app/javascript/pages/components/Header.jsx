import React, { useEffect, useState } from "react"
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import axios from "axios"

export default Header = ({loggedIn, setLoggedIn}) => {
  const handleLogout = () => {
    axios.post('/logout',config={withCredentials:true})
      .then(response => {
        if (response.status === 200){
          setLoggedIn(false)
        }
      })
  }
  
return (
<Navbar className="px-4 fluid" bg="dark" variant="dark" expand="lg">
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
      {loggedIn && <Button variant="secondary" className="d-flex" onClick={handleLogout}>Logout</Button>}
    </Navbar.Collapse>
</Navbar>
)
}