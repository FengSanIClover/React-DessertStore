import React from 'react';
import Logo from 'Component/Logo';
import 'Asset/Styles/Container/Toolbar/Toolbar.scss';

const toolbar = () => {
    return (
        <div className="toolbar__container--max-width ">
            <Logo />
            <div>navigationItems</div>
            <div>shoppingcar</div>
        </div>
    )
}

export default toolbar;