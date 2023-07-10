import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/pics/logo/logo-s.svg'
import { localStorageService } from '../services/localstorage'

export const Login = () => {
    let user = localStorageService.loadFromStorage('user')
    const navigate = useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault()
        if (user) {
            if (!user.isLogged) {
                if (e.target[0].value === user.email)
                    console.log('EMAIL GOOD');
                else {
                    addError(e.target[0], 'email')
                }
                if (e.target[1].value === user.password)
                    console.log('PASS GOOD');
                else {
                    addError(e.target[1], 'password')
                }
            }
        }
        if (e.target[0].value === user.email && e.target[1].value === user.password) {
            setTimeout(() => {
                navigate('/home')
            }, 1000);
        }
    }
    const handleSpacebar = (e) => {
        if (e.keyCode === 32) e.preventDefault()
    }
    const addError = (el, type) => {
        el.parentElement.classList.add('error')
        el.parentElement.classList.add(type)
    }
    const resetError = (el, type) => {
        // console.log(el.target.parentElement);
        el.target.parentElement.classList.remove('error')
        el.target.parentElement.classList.remove(type)
    }
    const handlePassword = (e) => {
        handleSpacebar(e)
        resetError(e, 'password')
    }

    return <section className="login flex column align-center justify-center">
        <img className='logo' src={logo} alt="" />
        <h1>התחברות לווין-ווין</h1>
        <form onSubmit={handleLogin} autoComplete='off'>
            <div className='input-wrapper'>
                <input type="email" name="email_signin" placeholder='אימייל' autoComplete="new-password" onKeyDown={resetError} />
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder='סיסמא' autoComplete="new-password" onKeyDown={handlePassword} />
            </div>
            <p>שכחתי סיסמא</p>
            <button>התחברות</button>
        </form>
        <div className='flex column align-center'>
            <p>אין לך עדיין חשבון?</p>
            <Link to='/register'>ליצירת חשבון</Link>
        </div>
    </section>
}