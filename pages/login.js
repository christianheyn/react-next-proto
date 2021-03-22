import React, { useReducer } from 'react';
import { reducer, initialState, ACTIONS } from '../reducer/loginReducer';

export default function Login () {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleEmailChange = (event) => dispatch({
        type:ACTIONS.VALIDATE_EMAIL,
        payload: event.target.value
    })

    return (
        <div>
            {state.errorMsg}
            <br />
            <input placeholder="EMAIL" onChange={handleEmailChange} />
            <br />
            <input />
            <br />

            {
                state.showLoginButton
                && <button>Login</button>
            }

        </div>
    );
}