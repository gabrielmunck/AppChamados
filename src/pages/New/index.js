import { useState, useEffect, useContext } from "react"

import { AuthContext } from "../../contexts/auth"
import { db } from "../../services/firebaseConnection"
import { collection, getDocs, getDoc, doc } from "firebase/firestore"

import Header from "../../components/Header"
import Title from "../../components/Title"
import './new.css'

import { FiPlusCircle } from "react-icons/fi"


const listRef = collection(db, 'customers')

export default function New() {

    const { user } = useContext(AuthContext)

    const [customers, setCustomers] = useState([])
    const [loadCustomer, setLoadCustomer] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)

    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    useEffect(() => {

        async function loadCustomers() {
            const querySnapshot = await getDocs(listRef )
                .then( (snapshot) => {

                    let lista = []

                    snapshot.forEach((doc) => {
                        lista.push({
                            id:doc.id,
                            nomeFantasia:doc.data().nomeFantasia
                        })
                    }) 
                    
                    if(snapshot.docs.size === 0) {
                        console.log('Nenhuma empresa encontrada')
                        setCustomers([  {id: 1, nomeFantasia: 'Houston, we have a problem'} ])
                        setLoadCustomer(false)
                        return
                    }

                    setCustomers(lista)
                    setLoadCustomer(false)

                })
                .catch ((error) => {
                    console.log('ERRO AO BUSCAR OS CLIENTES', error)
                    setLoadCustomer(false)
                    setCustomers([  {id: 1, nomeFantasia: 'Houston, we have a problem'} ])
                })
        }

        loadCustomers()

    }, [])

    function handleChangeSelect(e) {
        setAssunto(e.target.value)
    }

    function handleOptionChange(e) {
        setStatus(e.target.value);
    }

    function handleChangeCustomer(e) {
        setCustomerSelected(e.target.value)
    }

    return (


        <div>

            <Header />

            <div className="content">

                <Title name='Novo Chamado'> <FiPlusCircle size={25} /> </Title>


                <div className="container">

                    <form className="form-profile">

                        <label>Clientes</label>
                        {
                            loadCustomer ? (
                                <input type="text" disabled={ true } value='Carregando...'/>
                            ) : (
                                <select value={customerSelected} onChange={handleChangeCustomer}> 
                                    {customers.map((item, index) =>{
                                        return(
                                            <option key={index} value={index}>
                                                {item.nomeFantasia}
                                            </option>
                                        )

                                    })}
                                </select>
                            )
                        }
                            
                        

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option key={1} value='Suporte'>Suporte</option>
                            <option key={2} value='Visita Tecnica'>Visita Tecnica</option>
                            <option key={3} value='Financeiro'>Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">

                            <input type="radio" name="radio" value='Aberto'
                                onChange={handleOptionChange}
                                checked={status === 'Aberto'}
                            />
                            <span>Em Aberto</span>

                            <input type="radio" name="radio" value='Progresso'
                                onChange={handleOptionChange}
                                checked={status === 'Progresso'}
                            />
                            <span>Progresso</span>

                            <input type="radio" name="radio" value='Concluido'
                                onChange={handleOptionChange}
                                checked={status === 'Concluido'}
                            />
                            <span>Concluido</span>

                        </div>

                        <label>Complemento</label>
                        <textarea
                            type='text'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            placeholder="Descreva seu problema (opcional)."
                        />

                        <button type="submit">Registrar</button>

                    </form>

                </div>

            </div>

        </div>


    )

}