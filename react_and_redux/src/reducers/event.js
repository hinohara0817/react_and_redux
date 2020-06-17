/*import {INCREMENT, DECREMENT} from '../actions'

const initialState = {value: 0}

export default(state = initialState, action) => {
  switch (action.type){
    case INCREMENT:
      return {value: state.value + 1}
    case DECREMENT:
      return {value: state.value - 1}
    default:
      return state
  }
}
*/
import{ READ_EVENTS} from '../actions'

export default (state = {},action) => {
  switch(action.type){
    case READ_EVENTS:
      return state 
    default:
      return state
  }
}