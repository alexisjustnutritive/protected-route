import React from 'react';
import auth from '../auth';

const Login = ( props ) => {
    console.log( props )
    return (
        <>
        <h5>login page</h5>
        <button onClick={
            () => {
                auth.login( () => {
                    return props.history.push( '/secret' );
                } )
            }
        }> LOGIN
        </button>
        </>
    )
}

export default Login;
