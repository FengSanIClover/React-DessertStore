import React from 'react';
import SubscribeLogo from './Subscribe-Logo';
import SubscribeInput from './Subscribe-Input';

import 'Asset/Styles/Component/Subscribe/Subscribe.scss';

const subscribe = () => {
    return (
        <div className="subscribe__container">
            <SubscribeLogo />
            <SubscribeInput />
        </div>
    )
}

export default subscribe;