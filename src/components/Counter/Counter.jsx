import { useDispatch, useSelector } from 'react-redux'
import CounterActionGenerator from "../../store/actions/action.counter"
import ChangeLanguagePackActionsMaker from "../../store/actions/action.langpack"
import { Button } from '@material-ui/core';

const Counter = () => {

    const dispatch = useDispatch();
    const langPack = useSelector(state => state.LangPack) //useState(langFactory());    
    
    // throght reducer list to get needed state, Counter is reducer name
    //const counter = useSelector(state => state.Counter.value);
    
    const counter = useSelector(state => {
        console.log('State: ', state);
        return state.Counter.value;
      }); // throght reducer list to get needed state, Counter is reducer name
    
    function changeLang(option){

        if(option === 2){
            dispatch(ChangeLanguagePackActionsMaker.US(langPack));
        }
        else {
            dispatch(ChangeLanguagePackActionsMaker.TW(langPack));
        }
    }

    return (
            <>
                <Button variant = "contained" color="secondary" onClick={() => changeLang(2)}>US</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant = "contained" color="secondary" onClick={() => changeLang(1)}>繁中</Button><br/>
                <span>Counter: {counter} </span><br/>
                <Button variant="contained" color="primary" onClick={() => dispatch(CounterActionGenerator.Add(counter))}>{langPack.Component_Counter.TITLE_Add_BUTTON}</Button>         
                <Button variant="contained" color="primary" onClick={() => dispatch(CounterActionGenerator.Sub(counter))}>{langPack.Component_Counter.TITLE_Sub_BUTTON}</Button>         
            </>
        )
}

export default Counter