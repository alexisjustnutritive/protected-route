import React from 'react';
import auth from '../auth'

const Secret = ( props ) => {
    return (
        <>
        <h5>this is the secret page</h5>
        <button onClick={
            () => {
                auth.logout( () => {
                    return props.history.push( '/' );
                } )
            }
        }> LogOut
        </button>
        </>
    )
}

export default Secret
