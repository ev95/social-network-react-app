import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import siteLogo from '../../assets/images.png'

import './Header.css'

function Header() {


    useEffect(() => {

    }, []);

    return (
        <header>
            <div className="container header">
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src={siteLogo} />
                    </NavLink>
                </div>
                <nav className='nav-menu'>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/users'}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="search">

                    <input value='' onChange={(e) => console.log(e)} type="text" id="search-input" placeholder="Search..." />
                    {/* {isOpen &&
                        <div className='search-result'>
                            {state?.searchResult?.map((country) => {
                                return <span key={country.name.common} onClick={() => navigateTo(country.name.common)} className=''>{country.name.common}</span>
                            })}
                            {state.errorMessage && state?.searchResult.length === 0 && <span>{state.errorMessage}</span>}
                        </div>} */}
                </div>

                {/* <LightDarkSwitch /> */}
            </div>
        </header>
    )
}

export default Header