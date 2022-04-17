import React, { useReducer } from 'react';
function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value,
    };
}
function Info() {
    let [state, dispatch] = useReducer(reducer, {
        firstName: '',
        LastName: '',
    })
    return (
        <div>
            <input name="firstName" type="text" onChange={ (e) => {
                dispatch(e.target);
            } }></input>
            <input name="LastName" type="text" onChange={ (e) => {
                dispatch(e.target);
            } }></input>
            <p>{ state.firstName } { state.LastName }</p>
        </div>
    )
}

export default Info;