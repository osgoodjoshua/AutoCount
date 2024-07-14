import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };


    return (
        <nav className='flex items-center justify-between flex-wrap bg-yellow-300 p-6'>
            <div className='flex items-center flex-shrink-0 text-blue-900 mr-6'>
                <Link to='/' className='hover:text-black font-semibold underline text-xl tracking-tight'>AutoCount
                <i className="underline text-xl fa-solid fa-car-side"></i></Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-blue-900 border rounded border-blue-900 hover:text-black hover:border-black'>
                    <i className='fa-solid fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow space-x-5 pt-5">
                    <Button text='Home' link='/' onClick={clicked}/>
                    <Button text='About' link='/about' onClick={clicked}/>
                    <Button text='Dashboard' link='/dashboard' onClick={clicked}/>
                    {
                            !isAuthenticated ? 
                            <Button text='Login' onClick={signInOnClick}/>
                            :
                            <Button text='Sign Out' onClick={signOutOnClick}/>
                        }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar