import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => (<Counter></Counter>)
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
class Counter extends Component {
  // State コンポーネントの状態を持つ（可変
  //初期化処理
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  //メソッド
  handlePlusButton = () => {
    //Stateの変更
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () =>{
    this.setState({count: this.state.count - 1})
  }
  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}
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
export default App;
