import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp/signUp'
import Dashboard from '../pages/Dashboard';

import Private from './Private.js';

function RoutesApp() {
    return (

        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} />
        </Routes>

    )
}

export default RoutesApp;