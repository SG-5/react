import{ React,useState} from "react";

function Todo({ title,todos,setTodos,id}) {
  
  const deleteTodo = () => {
    let elemDelete = todos.filter(elem => {
      console.log('elem.title  '+elem.title)
       return elem.id !== id
    }
    )

setTodos(elemDelete)
  } 
  

  const handleChecked = (id) => {
    
    setTodos(todos.filter((item) => {
      
      if (item.id !==id) {
        item.isComleted = !item.isComleted
        console.log('id' ,id,'id' ,item.id)
        
      }
    
      return item
    }))
     console.log(todos)
     
}


 
  return (
    <>
      <input className="checkbox"  onChange={(id,event)=>handleChecked(id)}  type="checkbox"  />
      <span className="todo">{title}</span>
      <button className="deleteButton"  onClick={deleteTodo}>X</button>
      
      
    </>
    
     
  )
}

export default Todo