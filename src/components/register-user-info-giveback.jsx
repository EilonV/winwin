import { useNavigate } from "react-router-dom";
import { localStorageService } from '../services/localstorage'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';

export const Giveback = (props) => {

    const swiperRef = useRef();
    const navigate = useNavigate();
    let giveback = []

    const handleInputs = () => {
        let forms = document.querySelectorAll('.giveback-form ');
        if (!giveback.length)
            for (var i = 0; i < forms.length; i++) {
                let title, content
                for (var j = 0; j < 2; j++) {
                    if (forms[i][0].value) {
                        title = forms[i][0].value
                        content = forms[i][1].value
                    }
                }
                if (title) {
                    giveback.push({ title: title, content: content })
                }
            }

        props.setNewUser(newUser => ({
            ...newUser,
            giveback: giveback,
        }))
        completeRegister()
    }


    const completeRegister = () => {
        localStorageService.saveToStorage('user', props.newUser);
        setTimeout(() => {
            navigate('/success')
        }, 1000);
    }
    return <div className="wishlist" ref={props.givebackRef}>
        <p>מה ברצונך לקבל?</p>
        <p>
            טקסט זה יופיע בפרופיל שלך תחת הכותרת
            <br />
            <span> "רצוי" </span>
            ויהיה גלוי למבקרים בו.
            אפשר להזין
            <br />
            יותר ממשאלה אחת.
            <br />
            תהיה לך אפשרות לערוך את הרשימה שלך
            <br />
            בכל זמן.
        </p>
        <div className="flex column align-center">
            <Swiper
                className="mySwiper"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <form className="giveback-form first-giveback-form flex column align-center">
                        <div className="giveback-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" required="required"></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form className="giveback-form flex column align-center">
                        <div className="giveback-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" ></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form className="giveback-form flex column align-center">
                        <div className="giveback-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" ></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide >
                    <form className="giveback-form flex column align-center">
                        <div className="giveback-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" ></textarea>
                        </div>
                    </form>
                </SwiperSlide>

            </Swiper>
        </div>
        <button onClick={handleInputs}>הבא</button>
    </div>
}
