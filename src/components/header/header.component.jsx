import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/favicon.svg'

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <HashRouter basename="/">
            <Link to="/">
                <MainLogo className='logo-container' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                <Link >
                iSHMEET
                    
                </Link>

                <Link className='option' to='/signin'>
                    {
                        (currentUser!==null) ?
                            <div>ACCOUNT</div>
                        :
                            <div>SIGN IN</div>
                    }
                </Link>
            </div>
        </HashRouter>
    </div>
)

export default Header;