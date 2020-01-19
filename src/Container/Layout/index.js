import React from 'react';
import Toolbar from '../Toolbar';
import Footer from '../Footer';

const layout = (props) => {
    return (
        <>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default layout;