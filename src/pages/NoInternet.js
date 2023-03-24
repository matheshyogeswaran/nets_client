import React, { useState, useEffect } from 'react';

const NoInternet = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(false);

    // On initization set the isOnline state.
    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if (isOnline) {
        return (props.children)
    } else {
        return (
            <>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn btn-light btn-lg border border-dark" type="button" disabled>
                        {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                        No Internet ! 
                    </button>
                </div>
            </>
        )
    }
}

export default NoInternet;