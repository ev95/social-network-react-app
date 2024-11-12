import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { useEffect } from 'react';

import { getMeThunk, LogoutUserThunk } from '../../store/profileReducer';
import siteLogo from '../../assets/images.png'
import './Header.css'

function Header() {
    const { isLoggedIn, userName } = useSelector((state) => state.profileState)
    console.log(userName)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMeThunk())
    }, [])

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

                <div className='user-profile'>
                    {isLoggedIn ?
                        <><FaUser className='user-icon' /> {userName} / <button className='logout-btn' onClick={() => dispatch(LogoutUserThunk())}>Logout</button> </>
                        : <NavLink to={'/login'} className="login-link">Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header