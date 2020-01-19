import React from 'react';
import 'Asset/Styles/Component/Subscribe-Input/Subscribe-Input.scss';

const subscribeInput = () => {
    return (
        <div className="subscribe-input__container ">
            <div className="subscribe-input__envelope" >
                <i className="fas fa-envelope"></i>
            </div>
            <input type="text" maxLength="50" className="subscribe-input__inputbox" />
            <button type="button" className="subscribe-input__arrowbtn">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default subscribeInput;