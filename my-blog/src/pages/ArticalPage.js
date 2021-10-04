import React, { useEffect, useState } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import { Button } from "react-bootstrap";
import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";

const baseURL = "http://localhost:3000/api/";

export default function Artical({ match }) {
  const name = match.params.name;

  const [artical, setArtical] = useState(null);
  useEffect(() => {
    axios.get(`${baseURL}artical/${name}`).then((response) => {
      // console.log(JSON.stringify(response.data));
      setArtical(response.data);
    });
  }, [name]);

  const upVote = () => {
    axios.post(`${baseURL}artical/${name}/like`).then((response) => {
      setArtical(response.data);
    });
  };

  if (!artical) return <NotFoundPage />;
  return (
    <>
      <h3>{artical.name}</h3>

      <p>{artical.para}</p>

      <Button variant="outline-dark" onClick={() => upVote()}>
        {artical.likes ? artical.likes : 0} 👍
      </Button>

      <br />
      <AddComment articalName={artical.name} setArtical={setArtical} />
      <CommentList comments={artical.comments} />
    </>
  );
}
