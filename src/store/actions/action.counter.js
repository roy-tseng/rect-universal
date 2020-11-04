export const CounterActionDef = {
    Add : "+",
    Sub : "-"
}


const CounterActionGenerator = (purpose, state) => {
    return {type: purpose, payload: state};
}

export default CounterActionGenerator;