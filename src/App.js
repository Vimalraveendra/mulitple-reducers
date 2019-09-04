
import React,{ Component} from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Multiple-Reducer
      </header>
      <h1>Click the button! it will add the value of A and B</h1>
      <div className="col">
         <div className='heads'><span>A:</span>{this.props.a}</div>
       <button className='btn' onClick={()=>{this.props.onUpdateA(this.props.b)}}>update A</button>
       </div>
          <div className="col">
         <div className='heads'><span>B:</span>{this.props.b}</div>
       <button className='btn' onClick={()=>{this.props.onUpdateB(this.props.a)}}>update B</button>
       </div>
    </div>
  );
}
}

const mapStateToProps =(state)=>{
  return{
    a:state.rA.a,
    b:state.rB.b
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onUpdateA:(b)=>dispatch({type:"UPDATE_A",value:b}),
    onUpdateB:(a)=>dispatch({type:"UPDATE_B", value:a})
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);