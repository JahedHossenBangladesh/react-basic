import React from "react";

const Book = (props) => {
  const { author, title, img } = props;

  const eventHadler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hellow wordl");
  };

  const complexHandler = (author, title, img) => {
    console.log(author, title, img);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}> {title}</h1>
      <h4 style={{ color: "red", fontSize: "0.75rem", marginTop: "0.25rem" }}>
        {" "}
        {author}{" "}
      </h4>
      <button type="button" onClick={eventHadler}>
        reference example
      </button>
      <button type="button" onClick={() => complexHandler(author, title, img)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
