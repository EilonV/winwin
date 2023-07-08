import logo from '../assets/pics/logo/logo-s.svg'
import google from '../assets/pics/google.svg'
import { RegisterEmail } from '../components/register-email'
import { RegisterUserInfo } from '../components/register-user-info'
import { useRef, useState } from 'react'

export const Register = () => {
    const [newUser, setNewUser] = useState({
        email: '',
        name: '',
        city: '',
        password: '',
        wishlist: [],
        giveback: [],
        isLogged: false
    });
    console.log('newUser', newUser);

    const emailRef = useRef();
    const userInfoRef = useRef();

    const addError = (el, type) => {
        el.parentElement.classList.add('error')
        el.parentElement.classList.add(type)
    }
    const resetError = (el, type) => {
        el.parentElement.classList.remove('error')
        el.parentElement.classList.remove(type)
    }
    const cancelSpace = (e) => {
        if (e.keyCode === 32) e.preventDefault()
    }
    return <section className="register-wrapper">
        <RegisterEmail logo={logo} google={google} newUser={newUser} setNewUser={setNewUser} addError={addError} resetError={resetError} cancelSpace={cancelSpace} emailRef={emailRef} userInfoRef={userInfoRef} />
        <RegisterUserInfo logo={logo} newUser={newUser} userInfoRef={userInfoRef} setNewUser={setNewUser} addError={addError} resetError={resetError} cancelSpace={cancelSpace} />
    </section>
}