import './header.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import avatarImg from "../../assets/avatar.png";

import { FiHome, FiUser, FiSettings } from "react-icons/fi";

export default function Header() {

    const { user } = useContext(AuthContext)

    return (
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt='Imagem de perfil do Usuario' />
            </div>

            <Link to='/dashboard'>
                <FiHome color="#FFF" size={24} />
                Home
            </Link>

            <Link to='/customers'>
                <FiUser color="#FFF" size={24} />
                Clientes
            </Link>

            <Link to='/profile'>
                <FiSettings color="#FFF" size={24} />
                Perfil
            </Link>
        </div>
    )

}