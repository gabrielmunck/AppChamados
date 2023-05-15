import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiSettings, FiUpload } from "react-icons/fi";
import avatar from "../../assets/avatar.png"

import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import './profile.css'

export default function Profile() {

    const { user, storageUser, setUser, logout } = useContext(AuthContext) // Pegando dados do User atraves do contexto

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl) // Se tiver um user puxara a foto de perfil do usuario, se nao, ira ficar como estado nulo
    const [imageAvatar, setImageAvatar] = useState(null)
    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)

    function handleFile(e) {
        if(e.target.files[0]) {
            const image = e.target.files[0]

            if(image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(image)) // Criando uma URL para a imagem, caso ela seja do tipo indicado acima 
            } else {
                alert ("Envie uma imagem com o formato PNG ou JPEG.")
                setImageAvatar(null)
                return
            }
        }
    }


    return (
        <div>
            <Header />
            <div className='content'>
                <Title name='Minha Conta'>
                    <FiSettings size={26} />
                </Title>

                <div className='container'>

                    <form className='form-profile'>

                        <label className='label-avatar'>

                            <span> <FiUpload color='#FFF' size={25} /> </span>
                            <input type='file' accept='image/*' onChange={handleFile}/> <br />
                            {avatarUrl === null ? (          // Estando em estado nulo puxara a imagem padrao avatar
                                <img src={avatar} alt='foto de perfil' width={250} height={250} />
                            ) : (
                                <img src={avatarUrl} alt='foto de perfil' width={250} height={250} /> // Se nao, puxa a imagem que o usuario inseriu
                            )}

                        </label>

                        <label>Nome</label>
                        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>Email</label>
                        <input type='text' value={email} disabled={true} />

                        <button type='submit'>Salvar</button>

                    </form>
                </div>

                <div className='container'>
                    <button className='logout-btn' onClick={ () => logout() }>Sair</button>
                </div>

            </div>

        </div>
    )
}