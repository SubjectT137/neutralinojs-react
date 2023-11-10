import { useEffect } from 'react'
import './App.css';

// Import bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button'; 

// Import filesystem namespace
import { filesystem } from "@neutralinojs/lib"


//Import custom Components
import DraggableMarker from "./components/draggableMarker";


function App() {

  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem.readDirectory('./').then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Container className="vh-100">
      <Row className="vh-100 justify-content-md-center">
        <Col  sm={8}>
        <DraggableMarker> </DraggableMarker>
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}

export default App;