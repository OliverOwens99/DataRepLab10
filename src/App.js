import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './my_components/header';
import Content from './my_components/content';
import Footer from './my_components/footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  //navbar on the main page
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
      {/* here are the routes which show different elements when the url changes as a result of clicking the navbar */}
      <Routes>
      {/* shows content page content using routes */}
      <Route path ='/' element={<Content></Content>}></Route>
      {/* shows header page content using routes */}
      <Route path ='create' element={<Header></Header>}></Route>
      {/* shows footer page using routes */}
      <Route path ='read' element={<Footer></Footer>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
