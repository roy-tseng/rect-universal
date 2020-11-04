import Counter from "../states/state.counter"

const CounterHandler = (state=Counter, action) => {

    state = Counter;

    switch(action.type) {

        case "+":
            state = {...state, value : action.payload.value + 1};
            break;
        case "-":
            state = {...state, value : action.payload.value - 1};
            break;        
        default:
            state = Counter;
            break;
    }

    return state;

}

export default CounterHandler;