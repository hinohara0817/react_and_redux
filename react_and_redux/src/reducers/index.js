// アプリケーションの事実上の状態を持つ

import {combineReducers} from 'redux'
import {reducer as form } from 'redux-form'
import events from './events'

//結合
export default combineReducers({ events, form })

