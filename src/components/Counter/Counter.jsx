import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import langFactory, {SupportedLang} from '../../uiSettings/langFactory'
import CounterActionGenerator from "../../store/actions/action.counter"

const Counter = () => {

    const dispatch = useDispatch();
    const [langPack, SetLangPack] = useState(langFactory());

    // throght reducer list to get needed state, Counter is reducer name
    //const counter = useSelector(state => state.Counter.value);
    
    const counter = useSelector(state => {
        console.log('State: ', state);
        return state.Counter.value;
      }); // throght reducer list to get needed state, Counter is reducer name
    
    function changeLang(){
        SetLangPack(langFactory(SupportedLang.US));
    }

    return (
            <>
                <button onClick={() => changeLang()}>{langPack.General.TITLE_CHANGE_LANG}</button>
                <span>Counter: {counter} </span>
                <button onClick={() => dispatch(CounterActionGenerator.Add(counter))}>{langPack.Component_Counter.TITLE_Add_BUTTON}</button>         
            </>
        )
}

export default Counter