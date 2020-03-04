import React from "react";

function Comment({ data }) {
  console.log(data.author);
  return (
    <>
      <div className="comentario">
        <img src={data.author.avatar} />
        <div className="texto">
          <div className="nome">{data.author.nameB}</div>
          {data.content}
        </div>
      </div>
    </>
  );
}

export default Comment;
