import React from 'react';
import ReactDom from 'react-dom'
import './index.css'


const  book=[{ 
  id:1,
  author :"by David Perkins (Author)",
 title :'Making Learning Whole: How Seven Principles of Teaching Can Transform Education 1st Edition',
 img :"https://images-na.ssl-images-amazon.com/images/I/51jpBO3NIAL._AC_SX184_.jpg"
},
{ 
  id:2,
author:' by Marijn Haverbeke ',
  title:'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback – Illustrated, December 4, 2018',
  img:"https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._AC_SX184_.jpg"
},
{ 
  id:3,
author:'by David Flanagan ',
  title:'JavaScript: The Definitive Guide: Master the Worlds Most-Used Programming Language 7th Edition',
  img:'https://images-na.ssl-images-amazon.com/images/I/91hUer84PpL._AC_UL320_SR244,320_.jpg'
}
]
// const name =["jahed","sujon","jon"]
// const newName = name.map((name) =>{
//   return <h1>{name}</h1>
// })
const eventHadler = (e) =>{
  console.log(e)
  console.log(e.target)
  alert("Hellow wordl")
}
const complexHandler = (author,title,img) =>{
  console.log(author,title,img)
}

function BookList(){
  return <section className="bookList">  

  {
    book.map((books) =>{
    
      return <Book key={books.id} {...books}/>
    })
  }
  </section>
}


const Book = (props) =>{
  const {author,title,img} = props;
  
  return <article className="book" onMouseOver={() =>{
    console.log(title)
  }}>
    <img src={img} alt=""/>
    <h1 onClick={() => console.log(title)}> {title}</h1>
    <h4 style={{color:'red' ,fontSize:'0.75rem',marginTop:'0.25rem'}}> {author} </h4>
   <button type='button' onClick={eventHadler}>reference example</button>
   <button type='button' onClick={() => complexHandler(author,title,img)}>complex example</button>
  
 </article>
}



ReactDom.render(<BookList/>,document.getElementById('root')
);
