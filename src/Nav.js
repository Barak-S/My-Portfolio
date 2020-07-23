import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, Form } from 'react-bootstrap';


export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="dark" expand="xl" className="main-navigation">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="homepage" style={{color:"#0377B5", fontWeight: "500", fontSize: 15}}>Barak</Nav.Link>   
                        </Link>
                        <Link to="/projects" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link"  style={{color:"#0377B5", fontWeight: "500"}}>Projects</Nav.Link>   
                        </Link>
                        <Link to="/Blog" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link"  style={{color:"#0377B5", fontWeight: "500"}}>Blog</Nav.Link>   
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
