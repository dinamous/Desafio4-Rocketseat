import React, { Component } from "react";
import Comment from "./Comment";

function Post({ data }) {
  return (
    <>
      <div className="post">
        <div className="conteudo">
          <img src={data.author.avatar} />
          <div className="texto">
            <p className="nome">{data.author.nameA}</p>
            <p className="data">{data.date}</p>
          </div>
        </div>
        <p className="postContent">{data.content}</p>

        <hr />

        {data.comments.map(comentarios => (
          <Comment key={comentarios.id} data={comentarios} />
        ))}
      </div>
    </>
  );
}

export default Post;
