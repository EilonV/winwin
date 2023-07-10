import { Gives } from '../components/home/gives'
import { Wants } from '../components/home/wants'
import { localStorageService } from '../services/localstorage'
import swap from '../assets/pics/home/swap.svg'
import arrow from '../assets/pics/home/arrow-down.svg'
import heart from '../assets/pics/heart-icon.svg'
import avatar from '../assets/pics/avatar.svg'
import usr from '../assets/pics/home/nav/usr.svg'
import home from '../assets/pics/home/nav/home.svg'
import msg from '../assets/pics/home/nav/msg.svg'

export const Home = () => {
    const user = localStorageService.loadFromStorage('user')
    const userName = user.name.split(' ')[0]

    const switchTab = (e) => {
        const el = e.target
        const wants = document.querySelector('.wants')
        const gives = document.querySelector('.gives')
        console.log(gives.firstChild);
        if (el.parentElement.classList[0] === 'wants') {
            gives.firstChild.classList.remove('active')
            gives.firstChild.nextSibling.classList.remove('active')
        }
        else {
            console.log(wants);
            wants.firstChild.classList.remove('active')
            wants.firstChild.nextSibling.classList.remove('active')
        }

        el.classList.add('active')
        el.nextSibling.classList.add('active')
    }

    return <section className="home flex column align-center justify-center">
        <div className='give-take flex column align-center'>
            <div className="search">
                <p>{userName},</p>
                <p>יום בלי ברטר הוא יום מבוזבז</p>
                <input type="text" placeholder='עבודה בחימר      ' />
            </div>
            <div className='lists'>
                <Wants switchTab={switchTab} user={user} avatar={avatar} arrow={arrow} swap={swap} heart={heart} />
                <Gives switchTab={switchTab} user={user} avatar={avatar} arrow={arrow} swap={swap} heart={heart} />
                <div className="load">
                    <div className="load-more" >
                        <img src={arrow} alt="" />
                    </div>
                    <p>לטעון עוד</p>
                </div>
            </div>
        </div>
        <nav>
            <img src={usr} alt="" />
            <img src={msg} alt="" />
            <a href="/messages">
                <img src={home} alt="" />
            </a>
        </nav>
    </section>
}