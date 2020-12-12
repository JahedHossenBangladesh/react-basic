import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="bookList">
      {books.map((books) => {
        return <Book key={books.id} {...books} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
