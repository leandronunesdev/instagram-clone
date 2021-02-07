import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/ducks/user/actions';
import { UserState } from '../../store/ducks/user/types';

const User = () => {

    const dispatch = useDispatch()

    const { name, username, userPicture } = useSelector((state: UserState) => state.user)

    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(resposta => dispatch(getUser(resposta.data)))
    },[])

    return (
        <div className="user-info">            
            <img
                alt="Perfil"
                src={userPicture}
            />
            <div className="user-bio">
                <strong>{name}</strong>
                <span>{username}</span>
            </div>
        </div>
    )
}

export default User