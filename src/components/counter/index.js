import {Component} from "react";

class Counter extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count:this.props.initial || 0
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSub=this.handleSub.bind(this)
}

  handleAdd() {
    this.setState({
      count:this.state.count+1
    })
  }
  handleSub() {
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    const { count } = this.state
    const {title,isFinished}=this.props
    return (
      <div>
      <button disabled={isFinished} className={`button ${isFinished? 'disabled' : ''}`} onClick={this.handleAdd}>+</button>
        <h3> {title} Counter {count}</h3>
        <button onClick={this.handleSub} className='button'>-</button>
        {isFinished && <span className="message">your scope is {count}</span>}
     </div>

    )
}
}

export default Counter 
