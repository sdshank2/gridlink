import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Resources from './Pages/Resources.jsx'
import Contact from './Pages/Contact'
import NotFoundPage from './Pages/NotFoundPage'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    return (
        <div className="bg-white dark:bg-black">
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SubmitForm" element={<SubmitForm />} />
                <Route path="/Resources" element={<Resources />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App
