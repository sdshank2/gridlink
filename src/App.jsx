import React from 'react'
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Resources from './Pages/Resources.jsx'
import Contact from './Pages/Contact'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    let component
    switch (window.location.pathname) {
        case '/gridlink/':
            component = <Home/>
            break
        case '/gridlink/resources':
            component = <Resources/>
            break
        case '/gridlink/submitForm':
            component = <SubmitForm/>
            break
        case '/gridlink/contact':
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
