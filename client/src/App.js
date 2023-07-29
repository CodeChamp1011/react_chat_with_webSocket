import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Form, Button } from "react-bootstrap";

function App() {
  return (
    <Container className="w-25" fluid>
      <Alert className="mt-5" variant={"success"} dismissible>
        Hey, You got a new Message !!
      </Alert>
      <Form.Group className="mt-5" controlId="formBasicEmail">
        <Form.Control placeholder="Enter text" />
      </Form.Group>

      <Button className="mt-2" variant="primary">
        Broadcast
      </Button>
    </Container>
  );
}

export default App;
