import CounterHandler from "../handlers/handler.counter"
import { combineReducers } from 'redux'

const Reducers = {
    Counter : CounterHandler,
}

const HandlerDoc = combineReducers(
    Reducers
)

export default HandlerDoc;