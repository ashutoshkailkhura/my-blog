import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticalList from "../components/ArticalList";

const baseURL = "http://localhost:3000/api/";

export default function ArticalsListPage() {
  const [articalList, setArticalList] = useState(null);
  useEffect(() => {
    axios.get(`${baseURL}artical-list`).then((response) => {
      setArticalList(response.data);
    });
  }, []);

  if (!articalList) return <h2>guu</h2>;

  return (
    <>
      <h2>Articals</h2>
      <ArticalList list={articalList} />
    </>
  );
}
