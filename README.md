# Needed tools

1)Node js

2)chrome

3)react developer tool extension in chrome

4)code editor

## terminal

PWD - full pathname to current working Directory

LS - List of Directories

MKDIR- Create a Directory/Folder

CD - change a Directory

CD .. - Navigate to parent / one level up

CLEAR - clear console

Arrow key Up/Down - previous Commands

### npm

NPM init

npm install <package name > --save

npm install <package name > -g

npm install <package name > --save-dev

npx create-react-app the-project-name
after you can

npm start

npm run build

npm test

npm run eject

cd the-project-name

npm start

### jsx rules

return single element
div/section/article or Fragment
use camelCase for html attribute
className instead of class
close every element
formatting

### props

#### the children is pass

```javascript
function BookList() {
  return (
    <section className="bookList">
      <Book
        job="developer"
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>This is in The children</p>{" "}
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
      <Book make="make by rokomari" price={22} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> {title}</h1>
      <h4 style={{ color: "red", fontSize: "0.75rem", marginTop: "0.25rem" }}>
        {" "}
        {author}{" "}
      </h4>
      {props.children}
      {/* <p>{props.job}</p> */}
    </article>
  );
};
```
