import React from "react";
import { Link } from "react-router-dom";

export default function ArticalList({ list }) {
  return (
    <>
      <div>
        {list.map((e, k) => (
          <Link key={k} to={`/artical/${e.name}`}>
            <h3>{e.name}</h3>
            <h2>{e.title}</h2>
            {/* <p>{e.para.substring(0, 50)}</p> */}
            <hr />
          </Link>
        ))}
      </div>
    </>
  );
}
