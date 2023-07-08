import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import heads from '../assets/pics/logo/logo-heads.svg'
import body from '../assets/pics/logo/logo-body.svg'
import money from '../assets/pics/money.png'
import handshake from '../assets/pics/handshake.png'
import wallet from '../assets/pics/wallet.png'
import $ from 'jquery'


export const Intro = () => {
    const navigate = useNavigate();

    const interval = setInterval(() => {
        if ($('.swiper-pagination').children()[2].classList.value.includes('active')) {
            setTimeout(() => {
                clearInterval(interval)
                navigate('/register')
            }, 1000);
        }
    }, 4000);

    return <section className="intro flex column justify-center align-center">
        <div className='flex column align-center'>
            <img src={heads} alt="logo head" />
            <img src={body} alt="logo body" />
        </div>
        <Swiper
            pagination={true}
            modules={[Pagination]}
         
            className="mySwiper">
        <SwiperSlide className='flex column align-center justify-center'>
            <img src={money} alt="coin stack" />
            <p className='p1'>להרוויח מהכישרון שלך יותר</p>
        </SwiperSlide>
        <SwiperSlide className='flex column align-center justify-center'>
            <img src={handshake} alt="two gloved hands shaking" />
            <p className='p2'>להגיע אל יותר לקוחות</p>
        </SwiperSlide >
        <SwiperSlide className='flex column align-center justify-center'>
            <img src={wallet} alt="pink wallet" />
            <p className='p3'>הארנק נשאר בכיס</p>
        </SwiperSlide >
    </Swiper>
    {/* <div className='balls'>
            <div className='ball-connector-wrapper'>
                <div className='ball-connector ball-connector1'></div>
                <div className='ball-connector ball-connector2'></div>
            </div>
            <div className='ball ball1'> </div>
            <div className='ball ball2'> </div>
            <div className='ball ball3'> </div>
        </div> */}
    </section >
}