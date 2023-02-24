import React from 'react'

function Header({ handleDarkMode  }) {

    return (
        <div className='header'>
            <h1>QuickNote</h1>
            <label className="switch" >
                <input type="checkbox" onClick={() => {
                handleDarkMode((previousState) => !previousState);
            }} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default Header;