
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef} from 'react';

export const Wishlist = (props) => {

    const swiperRef = useRef();

    let wishlist = []
    const handleInputs = () => {
        let forms = document.querySelectorAll('.wishlist-form ');
        if (!wishlist.length)
            for (var i = 0; i < forms.length; i++) {
                let title, content
                for (var j = 0; j < 2; j++) {
                    if (forms[i][0].value) {
                        title = forms[i][0].value
                        content = forms[i][1].value
                    }
                }
                if (title) {
                    wishlist.push({ title: title, content: content })
                }
            }

        props.setNewUser(newUser => ({
            ...newUser,
            wishlist: wishlist,
        }))

        fillDetails()
    }

    const fillDetails = () => {
        if (wishlist.length !== 0)
            setTimeout(() => {
                props.wishlistRef.current.style = "display:none";
                props.givebackRef.current.style = "display:flex";
                document.querySelector('.register-pagination-prog').style.width = " 90%"
            }, 1500);
    }

    return (<div className="wishlist" ref={props.wishlistRef}>
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
                    <form className="wishlist-form first-wishlist-form flex column align-center">
                        <div className="wishlist-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" required="required"></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form className="wishlist-form flex column align-center">
                        <div className="wishlist-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" ></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form className="wishlist-form flex column align-center">
                        <div className="wishlist-input flex column align-center">
                            <div className="input-wrapper">
                                <input className="add-input" type="text" placeholder="עבודה בחימר" required="required" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="פירוט" ></textarea>
                        </div>
                    </form>
                </SwiperSlide>
                <SwiperSlide >
                    <form className="wishlist-form flex column align-center">
                        <div className="wishlist-input flex column align-center">
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
    </div>)
}