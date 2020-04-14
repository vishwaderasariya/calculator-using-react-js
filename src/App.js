import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './component/Keypad';
import Result from './component/Result';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       result : ""
    }
  }
   
  onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.escape()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
  }
  calculate = () =>
  {
    try{
      this.setState({
        result : (eval(this.state.result || "")) 
      })
    }
      catch(e){
        this.setState({
          result : "ERROR OCCURED"
        })
      }
    
  }
  reset = () =>
  {
    this.setState({
      result : ""
    })

  }
  escape = () =>
  {
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }

  render()
  {
    return(
      <div>
      <div className='calculator'>
        <Result result={this.state.result}/>
        <Keypad onClick={this.onClick}/>
      </div>
      </div>
    )
  }
}
export default App