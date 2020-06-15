// アプリケーションの事実上の状態を持つ

import {combineReducers} from 'redux'
import count from './count'

//結合
export default combineReducers({count})