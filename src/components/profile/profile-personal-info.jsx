import { localStorageService } from "../../services/localstorage"
import heart from '../../assets/pics/heart-icon.svg'
import facebook from '../../assets/pics/faceb.svg'
import instagram from '../../assets/pics/insta.svg'
import location from '../../assets/pics/locat.svg'
import avatar from '../../assets/pics/avatar.svg'
export const ProfilePersonal = (props) => {
    return <div className="personal-info">
        <div className="profile-base flex space-between">
            <div className="personal-desc flex align-center">
                <p>בת 25,
                    <br />
                    סטודנטית לכלבנות טיפולית במרכז ״אופק״ בפתח תקווה ומאלפת כלבים
                </p>
            </div>
            <div className="info-pic flex align-center">
                <div className="name-city-count">
                    <p className="name">{props.user.name}</p>
                    <p className="city">{props.user.city}</p>
                    <p className="barter-count">14 ברטרים</p>
                </div>
                <div className="profile-pic-wrapper">
                    <img className="avatar" src={props.user.img ? props.user.img : avatar} alt="" />
                    <img className="heart" src={heart} alt="" />
                </div>
            </div>

        </div>

        <div className="personal-social">
            <a className="location flex align-center" href="/" target='noopener'>מפה<img src={location} alt="" /></a>
            <a href="https://www.facebook.com" target='noopener'>  <img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com" target='noopener'> <img src={instagram} alt="" /></a>
        </div>
    </div >
}