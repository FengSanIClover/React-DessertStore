import React from 'react';
import Logo from 'Component/Logo';
import NavigationItems from 'Component/NavigationItems';
import ShoppingCar from 'Component/ShoppingCar';
import 'Asset/Styles/Container/Toolbar/Toolbar.scss';


const toolbar = () => {
    return (
        <div className="toolbar__container--max-width ">
            <Logo />
            <NavigationItems />
            <ShoppingCar />
        </div>
    )
}

export default toolbar;