import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import pic1 from '../../assets/pics/gallery/user-gallery1.png';
import pic2 from '../../assets/pics/gallery/user-gallery2.png';
import pic3 from '../../assets/pics/gallery/user-gallery3.png';
import fb from '../../assets/pics/fb-msg.svg'
import ig from '../../assets/pics/insta.svg'
import wa from '../../assets/pics/whatsapp.svg'

export const ProfileGallery = () => {
    return <div className="gallery flex column align-center">
        <h1>גלריה</h1>
        <Swiper className="mySwiper" loop={true}>
            <SwiperSlide>
                <img src={pic1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pic2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pic3} alt="" />
            </SwiperSlide>
        </Swiper>
        <div className="contact flex column align-center">
            <button>הצעת ברטר</button>
            <div className="or flex align-center">
                <div></div>
                <p>או</p>
                <div></div>
            </div>
            <div className="social flex">
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={wa} alt="" />
            </div>
        </div>
    </div>
}