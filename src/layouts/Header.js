import { FormatColorReset } from '@material-ui/icons';
import React,{useState} from 'react'
import {Navbar,Nav,Button, Container} from 'react-bootstrap'
import  SignUpModal from '../modal/signupModal'

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
    return (
      <>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
       <header>
           <Navbar bg="light" expand="lg">
             <Container>
    <Navbar.Brand href="#home">Chatting bot</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav.Link href="#home">Main</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Chatting</Nav.Link>
        <Nav.Link href="#link">Q&A</Nav.Link>
     
      
      <Nav>
        <Nav.Link>
        <Button class="float-right" variant="primary">로그인</Button>
        </Nav.Link>
        <Nav.Link>
          <Button class="float-right"  variant="secondary" onClick={() => setSignUpModalOn(true)}>회원가입</Button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>


       </header>
       </>
    )
}

export default Header
