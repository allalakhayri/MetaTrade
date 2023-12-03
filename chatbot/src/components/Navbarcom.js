import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Acceuil from './Acceuil';
import Formulaire from './Formulaire'
import Chatbot from './Chatbot';


const Navbarcom = () => {
  return (
    <Router>
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">METATRADE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
          <NavDropdown title="Utilisateur" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">déconnecter</NavDropdown.Item>
           
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to={'/'}>Accueil</Nav.Link>
          <Nav.Link as={Link} to={'/Form'}>Profil</Nav.Link>
          <Nav.Link eventKey={2} as={Link} to={'/Chatbot'}>
            Chatbot
          </Nav.Link>
          <Nav.Link as={Link} to={'/Form'}>Boutique</Nav.Link>
          <Nav.Link as={Link} to={'/Form'}>Portefeuille</Nav.Link>
          <Nav.Link as={Link} to={'/Form'}>Tournois</Nav.Link>
          <Nav.Link as={Link} to={'/Form'}>Historique</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  <div>
  <Routes>
    <Route path='/' element={<Acceuil/>}>
      
    </Route>
    <Route path='/Form' element={<Formulaire/>}>

    </Route>
    <Route path='/chatbotacceuil' element={<Chatbot/>}>
      
    </Route>
  </Routes>

</div>
</Router>
  )
}

export default Navbarcom
