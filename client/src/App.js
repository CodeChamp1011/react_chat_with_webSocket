import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Form, Button } from "react-bootstrap";
import useForm from "./hooks/useForm";
import io from "socket.io-client";

let socket = undefined;
const connection_url = "http://localhost:3030"; // process.env.REACT_APP_SOCKET_API;

function App() {
  const [messages, setMessages] = useForm("messages", []);

  useEffect(() => {
    socket = io(connection_url, { transport: ["websocket"] });

    socket.on("on-text-change", (data) => {
      setMessages((prev) => [...prev, data]);

      // if (showAlert) setShowAlert(false);
      // if (data.from === socket.id) setText("");
      // else setShowAlert(true);
    });
  }, []);

  return (
    <Container className="w-25" fluid>
      <Alert className="mt-5" variant={"success"} dismissible>
        Hey, You got a new Message !!
      </Alert>
      <Form.Group className="mt-5" controlId="formBasicEmail">
        <Form.Control placeholder="Enter text" />
      </Form.Group>
      <ul>
        {messages.map((m, ind) => (
          <li key={ind}>{m.text}</li>
        ))}
      </ul>
      <Button className="mt-2" variant="primary">
        Broadcast
      </Button>
    </Container>
  );
}

export default App;
