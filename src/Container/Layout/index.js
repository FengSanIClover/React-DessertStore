import React from 'react';
import Toolbar from '../Toolbar';

const layout = (props) => {
    return (
        <>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <div>footer</div>
        </>
    )
}

export default layout;