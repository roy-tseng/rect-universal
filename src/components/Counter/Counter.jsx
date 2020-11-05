import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import langFactory, {SupportedLang} from '../../uiSettings/langFactory'
import CounterActionGenerator from "../../store/actions/action.counter"
import { Button } from '@material-ui/core';

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
                <Button variant = "contained" color="secondary" onClick={() => changeLang()}>{langPack.General.TITLE_CHANGE_LANG}</Button><br/>
                <span>Counter: {counter} </span><br/>
                <Button variant="contained" color="primary" onClick={() => dispatch(CounterActionGenerator.Add(counter))}>{langPack.Component_Counter.TITLE_Add_BUTTON}</Button>         
                <Button variant="contained" color="primary" onClick={() => dispatch(CounterActionGenerator.Sub(counter))}>{langPack.Component_Counter.TITLE_Sub_BUTTON}</Button>         
            </>
        )
}

export default Counter