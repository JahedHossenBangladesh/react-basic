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
const firstBook={ author :"by ফরিদ আহমেদ",
 title :'স্মার্ট ইংলিশ স্মার্ট ওয়ে টু লার্ন ইংলিশ (পেপারব্যাক)',
 img :"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/46475e27e_173438.jpg"
}

const secondBook={ 
author:'Hearts Bangladesh',
  title:'Hearts General Two Date DIARY - 2021 (Green, Light Green Color)',
  img:'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/260X372/ea13dfd44_205179.jpg'
}
function BookList(){
  return <section className="bookList">  
    <Book job='developer' img={firstBook.img} author={firstBook.author} title ={firstBook.title}>
      <p>This is in The children</p> </Book>
      <Book img={secondBook.img} author={secondBook.author} title ={secondBook.title}/>
        <Book make='make by rokomari' price={22}/>
  </section>
}


const Book = ({img,title,author,children}) =>{
  // const {img,title,author} = props;
  return <article className="book">
    <img src={img} alt=""/>
    <h1> {title}</h1>
    <h4 style={{color:'red' ,fontSize:'0.75rem',marginTop:'0.25rem'}}> {author} </h4>
    {children}
    {/* <p>{props.job}</p> */}
  
 </article>
}



ReactDom.render(<BookList/>,document.getElementById('root')
);
