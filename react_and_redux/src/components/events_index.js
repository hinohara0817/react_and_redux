import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
//import PropTypes from 'prop-types';

import{ readEvents } from '../actions'
//import {increment, decrement} from '../actions'


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
class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }
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
  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({ readEvents })
/*
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
*/
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
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

