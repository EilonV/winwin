import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import heads from '../assets/pics/logo/logo-heads.svg'
import body from '../assets/pics/logo/logo-body.svg'



export const Intro = () => {
    const navigate = useNavigate();



    return <section className="intro flex column justify-center align-center">

        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide className='flex column align-center justify-center'>
                {/* <img src={money} alt="coin stack" /> */}
                <div className='highfive flex column align-center'>
                    <img className='logo-head' src={heads} alt="logo head" />
                    <img className='logo-body' src={body} alt="logo body" />
                </div>
                <p className='p1'>להרוויח מהכישרון שלך יותר</p>
            </SwiperSlide>
            <SwiperSlide className='flex column align-center justify-center'>
                {/* <img src={handshake} alt="two gloved hands shaking" /> */}
                <div className='highfive flex column align-center'>
                    <img className='logo-head' src={heads} alt="logo head" />
                    <img className='logo-body' src={body} alt="logo body" />
                </div>
                <p className='p2'>להגיע אל יותר לקוחות</p>
            </SwiperSlide >
            <SwiperSlide className='flex column align-center justify-center'>
                {/* <img src={wallet} alt="pink wallet" /> */}
                <div className='highfive flex column align-center'>
                    <img className='logo-head' src={heads} alt="logo head" />
                    <img className='logo-body' src={body} alt="logo body" />
                </div>
                <div className='to-register flex column'>
                    <p className='p3'>הארנק נשאר בכיס</p>
                    <button onClick={() => { navigate('/register') }}>להרשמה</button>
                </div>
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