import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"

import  Header  from "../../components/Header";



export default function Dashboard() {

    const { logout } = useContext(AuthContext)

    async function handleLogout() {
        await logout()
    }

    return (
        <div>

            <Header/>
            <h1>Pagina Dashboard</h1>
            <br/>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    )
}