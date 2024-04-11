import React from 'react'
import { Button } from "rsuite"; 
  
// Import the default CSS 
import "rsuite/dist/rsuite.min.css";
class Car extends React.Component {
    constructor() {
      super()
      this.state = {color: 1};
      this.handlechangecolor = this.handlechangecolor.bind(this);

    }
    handlechangecolor(){
      if (this.state.color == "blue")
        {this.setState({color:"red"})}
      else
      {
        this.setState({color:"blue"})
      }
    }
    render() {
      
        return (
        <>
        <h2>{this.state.color}</h2>
        <button  onClick={this.handlechangecolor}>Increment</button>
        <button  onClick={this.handlechangecolor}>Decrement</button>

        </>
        )

    }
  }

export default Car