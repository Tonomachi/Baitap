import React, { Component } from 'react'

export default class Function_Quang extends Component {
    constructor(props){
        super(props);
        this.state={
            full:"lmao",
            class:"1"
        }
    }
     user={
        name:"tran quang tien",
        age: 10
    }
    handlechange = (event)=>{
        this.setState({  full:"ta vai",
    class:"2"})
        
    }
  render() {
    return (
      <div>
        <h1>demo class</h1>
        {this.user.name} + {this.user.age}
   
        <h3>info:{this.props.info} </h3>
        <h3>time:{this.props.time}</h3>
        
        <hr/>
        <h3>state:
            full:{this.state.full} 
            class:{this.state.class}
        </h3>
        <button onClick={this.handlechange}>change name</button>
      </div>
    
    )
  }
}

