import React from 'react';
import ReactDom from 'react-dom'




function Greeting(){
   return <h4>This is Jahed and this is my component</h4>
}

ReactDom.render(<Greeting/>,document.getElementById('root')
);
