import {useState} from "react";

function Completed({todos,clearCompleted}) {

  
  return (
    <>
      <div>
      <button className="clearCompletedButton" onClick={clearCompleted}>clear completed </button>  

      </div>
       
     
    
    </>
    
     
  )
}

export default Completed