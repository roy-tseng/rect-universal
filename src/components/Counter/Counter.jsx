import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.Counter.value)

    return (
        <>
            <span>{counter}</span><br/>            
        </>
    )
}

export default Counter