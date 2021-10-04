import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export default function AddComment({ articalName, setArtical }) {
  const [username, setName] = useState("");
  const [usercomment, setComment] = useState("");

  const addComment = () => {
    axios
      .post(`${baseURL}artical/${articalName}/add-comment`, {
        username: username,
        usercomment: usercomment,
      })
      .then((response) => {
        setArtical(response.data);
        setName("");
        setComment("");
      });
  };
  return (
    <>
      <Container>
        <h4>Add Comment</h4>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={username}
              placeholder="your name"
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              value={usercomment}
              rows={3}
              onChange={(event) => setComment(event.target.value)}
              placeholder="add your comment"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => addComment()}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
