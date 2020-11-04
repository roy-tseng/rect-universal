import {CounterActions} from "../actionDef/actionDef"
import Counter from "../states/state.counter"

const CounterHandler = (state=Counter, action) => {

    switch(action.type) {
        case CounterActions.Add:           
            state = {...state, value : action.payload + 1};
            break;
        case CounterActions.Sub:
            state = {...state, value : action.payload - 1};
            break;        
        default:
            state = Counter;
            break;
    }

    return state;
}

export default CounterHandler;