import { useNavigate } from 'react-router-dom'
import logo from '../assets/pics/logo/logo-s.svg'
import success from '../assets/pics/success.gif'
export const Successful = () => {
    const navigate = useNavigate()
    
    return <section className="success flex column align-center justify-center">
        <img className='logo' src={logo} alt="" />
        <img className='gif' src={success} alt="" />
        <p>נרשמת בהצלחה, אפשר להתחיל</p>
        <button onClick={() => navigate('/login')}>להתחברות</button>
    </section>
} 