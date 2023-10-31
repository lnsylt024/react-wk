import {useReducer} from "react";

interface State {
    count: number;
}

type CounterActiion=
    |{type: "reset"}
    |{type: "setCount"; value:State["count"]};

const initialState: State = {count:0};

function stateReducer(state: State, action: CounterActiion) :State{
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return {...state,count:action.value};
        default:
            throw new Error("Unknown action.");
    }
}

function Index() {
    const [state, dispatch] =useReducer(stateReducer,initialState);
    const addFive = () => dispatch({type:"setCount",value:state.count+5}) ;
    const reset = () => dispatch({type:"reset"});

    return(
        <div>
            <h1>Welcome my Calculator!</h1>
            <p>count:{state.count}</p>
            <button onClick={addFive}>Add 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Index;