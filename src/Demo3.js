import React from "react";

class Operator extends React.Component{

    constructor(){
        super()
        this.state={num:1};
        this.handlechangeincrement = this.handlechangeincrement.bind(this)
        this.handlechangedecrement = this.handlechangedecrement.bind(this)

    }
    handlechangeincrement(){
        this.setState({num:this.state.num+1})
    }
    handlechangedecrement(){
        
        if (this.state.num<=0)
        {
            alert("negative number is not allowed")
            
        }
        else
        {
            this.setState({num:this.state.num-1})
        }
    }


    render(){
        return(
        <>
        <h1>this is yash</h1>
        <button onClick={this.handlechangeincrement}>Increment </button>
        <p>
            <h1>{this.state.num}</h1>
        </p>
        <button onClick={this.handlechangedecrement}>Decrement</button>
        </>
        )
    }

} 

export default Operator


