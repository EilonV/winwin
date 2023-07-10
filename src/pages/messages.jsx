import bg from '../assets/pics/messages/bg.svg'
import plane from '../assets/pics/messages/paper.svg'
import usr from '../assets/pics/home/nav/usr.svg'
import home from '../assets/pics/home/nav/home.svg'
import msg from '../assets/pics/home/nav/msg.svg'
import { useNavigate } from 'react-router-dom'
export const Messages = () => {
    const navigate = useNavigate()
    return <section className="messages flex column align-center justify-center text-center">
        <div className='imgs flex justify-center'>
            <img src={bg} alt="" />
            <img className='plane' src={plane} alt="" />
        </div>
        <h1>אין לך הודעות עדיין</h1>
        <p>כדי שתהינה הודעות יש להתחיל
            <br />
            ברטר עם משתמש אחר
        </p>
        <button onClick={()=>navigate('/home')}>חזרה</button>

        <nav>
            <img src={usr} alt="" />
            <img src={msg} alt="" />
            <a href="/messages">
                <img src={home} alt="" />
            </a>
        </nav>
    </section>
}