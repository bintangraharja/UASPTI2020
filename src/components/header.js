import React from 'react';
import {IconButton, MenuIcon} from 'evergreen-ui';
import '../App.css'
function Header(){
    return(
        <section>
            <div className="header">
                <IconButton icon={MenuIcon} className="inline"/>
            </div>
        </section>
    );
}
export default Header;