import React from 'react';
import Logo from 'Component/Logo';
import NavigationItems from 'Component/NavigationItems';
import 'Asset/Styles/Container/Toolbar/Toolbar.scss';


const toolbar = () => {
    return (
        <div className="toolbar__container--max-width ">
            <Logo />
            <NavigationItems />
            <div>shoppingcar</div>
        </div>
    )
}

export default toolbar;