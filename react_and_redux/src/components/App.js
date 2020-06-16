import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {increment, decrement} from '../actions'

//const App = () => (<Counter></Counter>)
  /*
  const profiles = [
    {name: "Taro"},
    {name: "Haneko"},
    //name: 10},
    //{},
  ]
  */
  //

//クラスコンポーネント
class App extends Component {
  // State コンポーネントの状態を持つ（可変
  //初期化処理
  /* reducerで行うので不要
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  */
  //メソッド
  /* action ceater使うので不要
  handlePlusButton = () => {
    //Stateの変更
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () =>{
    this.setState({count: this.state.count - 1})
  }
  */
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
//関数コンポーネント
/*const Cat = (props) =>{
  props 親から子に値を渡す時に使う(普遍)
  return <div>Meow. I am {props.name}.</div>
}

Cat.propTypes = {
  name: PropTypes.string.isRequired
}

Cat.defaultProps = {
  name: "Noname"
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(App)

