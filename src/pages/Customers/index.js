import { useState } from "react";

import Header from "../../components/Header"
import Title from "../../components/Title"

import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from "firebase/firestore";


export default function Customers() {

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleRegister(e) {

        e.preventDefault()

        if (nome !== '' && cnpj !== '' && endereco !== '') {

            await addDoc(collection(db, 'customers'), {

                nomeFantasia: nome,
                cnpj: cnpj,
                endereco: endereco

            })

            .then(() => {

                setNome('')
                setCnpj('')
                setEndereco('')
                toast.success('Empresa Registrada')
            })

            .catch((error) => {
                console.log(error)
                toast.error("Erro ao fazer cadastro")
            })

            
        } else {

            toast.error("Preencha todas as informações !")
            
        }

    }

    return (

        <div>

            <Header />

            <div className="content">

                <Title name='Clientes'>

                    <FiUser size={25} />

                </Title>


                <div className="container">

                    <form className="form-profile" onSubmit={handleRegister}>

                        <label>Nome Fantasia</label>
                        <input type="text" placeholder="Nome da Empresa"
                            value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>CNPJ</label>
                        <input type="text" placeholder="CNPJ da Empresa"
                            value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                        <label>Endereco</label>
                        <input type="text" placeholder="Endereco da Empresa"
                            value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                        <button type="submit">
                            Cadastrar
                        </button>

                    </form>

                </div>

            </div>

        </div>

    )

}