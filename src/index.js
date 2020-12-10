import React from 'react';
import ReactDom from 'react-dom'
import './index.css'



// function Greeting(){
//    return (<div>
//      <Person/>
//      <Message/>
//      <h4>This is Jahed and this is my component</h4> 
//      </div>);
// }
// const Greeting =() =>{
//   return React.createElement('div',{},React.createElement( 'h1',{},"hello world"));
// }
// const Person = () => <h1>this is John</h1>
// const Message = () =>{
//   return <p>This is the message</p>
  
// }
function BookList(){
  return <section className="bookList">  
    <Book/>
      <Book/>
        <Book/>
  </section>
}
const Author ="by ফরিদ আহমেদ";

const Book = () =>{
  const title ='স্মার্ট ইংলিশ স্মার্ট ওয়ে টু লার্ন ইংলিশ (পেপারব্যাক)'
  return <article className="book">
    <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/46475e27e_173438.jpg" alt=""/>
    <h1> {title}</h1>
    <h4 style={{color:'red' ,fontSize:'0.75rem',marginTop:'0.25rem'}}> {Author} </h4>
  
 </article>
}



ReactDom.render(<BookList/>,document.getElementById('root')
);
