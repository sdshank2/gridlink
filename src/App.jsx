import React from 'react'
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Resources from './Pages/Resources.jsx'
import Contact from './Pages/Contact'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    let component
    switch (window.location.pathname) {
        case '/stemscholars/':
            component = <Home/>
            break
        case '/stemscholars/resources':
            component = <Resources/>
            break
        case '/stemscholars/submitForm':
            component = <SubmitForm/>
            break
        case '/stemscholars/contact':
            component = <Contact/>
            break
    }
    return (
        <>
            <div className="bg-white dark:bg-black">
                <NavBar />
                <div>{component}</div>
            </div>
        </>
    )
}

export default App
