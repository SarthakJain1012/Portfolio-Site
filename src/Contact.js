import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./Contact.css";
import database from "./firebase.js";

function Contact(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const push = async () => {
    setName("");
    setPhonenumber("");
    setEmail("");
    await database
      .collection("user")
      .add({
        name: name,
        email: email,
        phonenumber: phonenumber,
      })
      .catch(alert);
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <Container fluid className="container">
        <Form className="form">
          <Form.Field>
            <label>Name</label>
            <br />
            <input
              placeholder="Your name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label>Email</label>
            <br />
            <input
              placeholder="Your Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label>Mobile Number</label>
            <br />
            <input
              placeholder="Your Mobile Number"
              type="phonenumber"
              name="phonenumber"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </Form.Field>
          <br />
          <Button onClick={push}>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
