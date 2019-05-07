import React from 'react';
import { Route, NavLink } from "react-router-dom";

const SubNav = props => {
    return (
        <div>
            <nav className="subNav">
                {props.subNav.map(elem =>
                    <div className="subNav-item">
                        <NavLink to={elem.link}>
                            <div className="subImgWrap"><img src={elem.img} /></div>
                            {elem.name}
                        </NavLink>
                    </div>
                )}
            </nav>


        </div>
    )
}

export default SubNav;