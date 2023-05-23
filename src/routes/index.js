import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp/signUp'
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile/index';
import Customers from '../pages/Customers';
import New from '../pages/New';

import Private from './Private.js';


function RoutesApp() {
    return (

        <Routes>
            
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />

            <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} />
            <Route path="/profile" element={<Private> <Profile /> </Private> } />
            <Route path="/customers" element={<Private> <Customers /> </Private> } />
            <Route path="/new" element={<Private> <New/> </Private> } />
            
        </Routes>

    )
}

export default RoutesApp;