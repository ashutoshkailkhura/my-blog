import React from "react";
import { Card } from "react-bootstrap";

export default function CommentList({ comments }) {
  if (comments.length === 0) return null;
  return (
    <>
      {comments.map((e, i) => (
        <>
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{e.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                03/10/2021
              </Card.Subtitle>
              <Card.Text>{e.usercomment}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ))}
    </>
  );
}
