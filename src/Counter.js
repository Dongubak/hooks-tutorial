import React, { useReducer } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'PLUS' :
            return  { value: state.value + 1 }
        case 'MINUS':
            return { value: state.value - 1 }
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { value : 0 });
    return(
        <div>
            <p>
                현재 카운터 값은 { state.value }
            </p>

            <button onClick={ () =>{
                dispatch({ type: 'PLUS' });
            } }> + </button>

            <button onClick={ () => {
                dispatch({ type: 'MINUS' });
            } }> - </button>
        </div>
    )
}

export default Counter;