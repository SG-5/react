import {React,useState }from 'react';
import Todo from '../todo';
import Completed from '../completed';

function TodoList() {
  const [value, setValue]= useState('')
  const [todos, setTodos] = useState([])
  let [isDane, setIsDane] = useState(false)


  const handleChangeValue = (e)=>{
    setValue(e.target.value)  
    
  }

  const add = () => {
    setTodos((prev) => [...prev, {
      title: value,
      id: Math.random(),
      isComleted:false
      
    }])
    setValue('')
   
  }



 let handleDane = () => {
  
  setIsDane(isDane=!isDane)
}


  
  const clearCompleted = ()=> {
    setTodos( 
      
      todos.filter(elem => elem.isComleted===false )
)

  }
  

  return (
    <div className='container'>
      <input value={value} onChange={e => handleChangeValue(e)} type='text'/>
      <button className='addButton' onClick={add} >Add</button>   

      {todos.map((todo) => {
  return <div key={todo.id} className={`${isDane? 'isDane':''}`} onClick={handleDane} >
    <Todo   todos={todos} title={todo.title} id={todo.id} isComleted={todo.isComleted}
      setTodos={setTodos}
    
    
    />
  </div>
}
      ) 
      }
      <Completed   clearCompleted={clearCompleted} />
    </div>
 
     
  )
}
export default TodoList