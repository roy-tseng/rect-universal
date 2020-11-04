import { useDispatch, useSelector } from 'react-redux'
import CounterActionGenerator from "../../store/actions/action.counter"

const Counter = () => {

    const dispatch = useDispatch();

    // throght reducer list to get needed state, Counter is reducer name
    //const counter = useSelector(state => state.Counter.value);
    
    const counter = useSelector(state => {
        console.log('State: ', state);
        return state.Counter.value;
      }); // throght reducer list to get needed state, Counter is reducer name
    

   return (
        <>
            <span>Counter: {counter} </span><button onClick={() => dispatch(CounterActionGenerator.Add(counter))}>+</button>         
        </>
    )
}

export default Counter