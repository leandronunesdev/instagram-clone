import React from 'react'
import { FiUser } from 'react-icons/fi'
import { useSelector } from 'react-redux';
import Logo from "../../images/logo-instagram.png";
import { UserState } from '../../store/ducks/user/types';

const Header = () => {

    const { name } = useSelector((state: UserState) => state.user)    

    return (
        <div className="header">
            <header>
                <img src={Logo} alt="Logo Instagram" />
                <div className="top-info"> 
                    <span>
                        <FiUser />
                        { name }
                    </span>
                </div>
            </header>
        </div>
    )     
}

export default Header