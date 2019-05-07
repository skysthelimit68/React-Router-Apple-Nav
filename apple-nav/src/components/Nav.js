import React from 'react';
import SubNav from "./SubNav";

const Nav = props => {
    let classTag = props.nav.id ===  5 ? "subNav-Full-Dark" : "subNav-Full";
    return (
        <div className={classTag}>
            <SubNav subNav = {props.nav.subLinks}/>
        </div>
    )
}

export default Nav;