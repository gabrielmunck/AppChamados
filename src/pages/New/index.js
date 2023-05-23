import { useState } from "react"

import Header from "../../components/Header"
import Title from "../../components/Title"
import './new.css'

import { FiPlusCircle } from "react-icons/fi"


export default function New() {

    const [customers, setCustomers] = useState([])

    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    function handleOptionChange(e) {
        setStatus(e.target.value);
    }

    return (


        <div>

            <Header />

            <div className="content">

                <Title name='Novo Chamado'> <FiPlusCircle size={25} /> </Title>


                <div className="container">

                    <form className="form-profile">

                        <label>Clientes</label>
                        <select>
                            <option key={1} value={1}>Mercado Teste</option>
                            <option key={2} value={2}>TEch tek</option>
                        </select>

                        <label>Assunto</label>
                        <select>
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