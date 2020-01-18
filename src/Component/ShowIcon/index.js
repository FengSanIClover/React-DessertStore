import React from 'react';
import 'Asset/Styles/Component/ShowIcon/ShowIcon.scss';

const showIcon = (props) => {
    console.log(`showbar`, props.hidebar)

    let classList = ["showIcon__container"];
    if (props.hidebar) {
        classList.push("showIcon__bar");
    }

    return (
        <div className={classList.join(" ")}>
            <p>{props.children}</p>
        </div>
    )
}

export default showIcon;