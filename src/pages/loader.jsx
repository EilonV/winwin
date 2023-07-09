import wlogo from '../assets/pics/logo/w-logo.svg'
import inlogo from '../assets/pics/logo/in-logo.svg'
import { useNavigate } from 'react-router-dom';

export const Loader = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/login')
    }, 8000);

    return <section className="loader">
        <div className='logo-with-text flex column'>
            <div className='logo-wrapper flex'>
                <div className='half-logo flex align-bottom'>
                    <img className='w' src={wlogo} alt="w winwin logo" />
                    <img className='in' src={inlogo} alt="in winwin logo" />
                </div>
                <div className='half-logo flex align-bottom'>
                    <img className='w' src={wlogo} alt="w winwin logo" />
                    <img className='in' src={inlogo} alt="in winwin logo" />
                </div>

            </div>
            <div className='text-under-logo'>
                <p>עסקים קטנים,
                    <br />
                    <span>אנשים גדולים</span></p>
            </div>
        </div>
        {/* <div className='click-zone' onClick={advanceScope} /> */}

    </section>
}