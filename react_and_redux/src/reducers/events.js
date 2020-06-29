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
import _ from 'lodash'
import{ READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch(action.type){
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}