import React from 'react';
import Logo from 'Component/Logo';
import NavigationItems from 'Component/NavigationItems';
import ShowIcon from 'Component/ShowIcon';
import 'Asset/Styles/Container/Toolbar/Toolbar.scss';


const toolbar = () => {
    return (
        <div className="toolbar__container--max-width ">
            <ShowIcon hidebar>
                <i className="fas fa-bars"></i>
            </ShowIcon>
            <Logo />
            <NavigationItems />
            <ShowIcon>
                <i className="fas fa-shopping-cart"></i>
            </ShowIcon>
        </div>
    )
}
// <i className="fas fa-shopping-cart"></i>
export default toolbar;