import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {newActions} from './actions/action';

class App extends  React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo_list : [],
      text:''
    };
    this.add = this.add.bind(this);
    this.onchangeHandler = this.onchangeHandler.bind(this);
  }
  onchangeHandler(event){
    this.setState({text:event.target.value});
    console.log("data", this.state.text);
    
  };
  add(){
    alert( this.state.text)
    //console.log("new" , this.props)
   this.props.changeName(this.state.text) 
  }
  render() {
    console.log("props" , this.props)
    return (
      <div>
        <h1>Todo List</h1>
        <h1> My name is {this.props.myname} </h1>
        <input type="text" value={this.state.text} onChange={this.onchangeHandler} />
        <button onClick = {this.add}>Add</button>
      </div>
    )
  } 
}

const mapStateToProps  = (state) =>{
  return {
    myname:state.name,
    wishes : state.wishes
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeName : (name) => {dispatch(newActions(name))}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
