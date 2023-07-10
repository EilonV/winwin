import { useRef } from "react";
import { Giveback } from "./register-user-info-giveback"
import { PersonalInfo } from "./register-user-info-personal"
import { Wishlist } from "./register-user-info-wishlist"
import arrow from '../assets/pics/arrow.svg'

export const RegisterUserInfo = (props) => {
    const wishlistRef = useRef();
    const givebackRef = useRef();
    const personalRef = useRef();

    return <div className='user-info' ref={props.userInfoRef}>
        <div className="register-bar flex column align-center">
            <h1>הרשמה</h1>
            <div className="register-pagination">
                <div className="register-pagination-prog"></div>
            </div>
        </div>

        <PersonalInfo setNewUser={props.setNewUser} personalRef={personalRef} wishlistRef={wishlistRef} addError={props.addError} resetError={props.resetError} cancelSpace={props.cancelSpace} arrow={arrow} />
        <Wishlist setNewUser={props.setNewUser} wishlistRef={wishlistRef} givebackRef={givebackRef} addError={props.addError} resetError={props.resetError} cancelSpace={props.cancelSpace} arrow={arrow} />
        <Giveback setNewUser={props.setNewUser} givebackRef={givebackRef} newUser={props.newUser} addError={props.addError} resetError={props.resetError} cancelSpace={props.cancelSpace} arrow={arrow} />

    </div>
}