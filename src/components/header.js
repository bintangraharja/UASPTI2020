import React from 'react';
import {IconButton, MenuIcon, CloudIcon} from 'evergreen-ui';
import '../App.css'
function Header(){
    return(
        <section>
            <div className="header">
                <IconButton icon={MenuIcon}/>
                <div className="headertitle">
                    <CloudIcon size={25}/>HOME<CloudIcon size={25}/>
                </div>
            </div>
        </section>
    );
}
export default Header;