// アプリケーションの事実上の状態を持つ

import {combineReducers} from 'redux'
import events from './events'

//結合
export default combineReducers({ events })

