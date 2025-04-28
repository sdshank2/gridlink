import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Information from './Pages/Information'
import Resources from './Pages/Resources.jsx'
import NotFoundPage from './Pages/NotFoundPage'
import NavBar from "./components/NavBar.jsx";
//Add a footer with contact information
//Fix light mode on every page & navbar
// new comment
const App = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 mt-20">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/SubmitForm" element={<SubmitForm />} />
                    <Route path="/Resources" element={<Resources />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App
