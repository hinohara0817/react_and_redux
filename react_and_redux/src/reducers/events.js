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
import{ CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch(action.type){
    case CREATE_EVENT:
    case READ_EVENTS:
    case UPDATE_EVENT:
      return _.mapKeys(action.response.data, 'id')
    case READ_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data}
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}