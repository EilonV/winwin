import { ProfilePersonal } from "../components/profile/profile-personal-info"
import arrow from '../assets/pics/arrow.svg'
import { useNavigate } from "react-router-dom"
import { WantGive } from "../components/profile/want-give"
import { localStorageService } from "../services/localstorage"
import { ProfileGallery } from "../components/profile/profile-gallery"
import { Recommendations } from "../components/profile/recommendations"

export const Profile = () => {
    const navigate = useNavigate()
    const user = localStorageService.loadFromStorage('user')

    return <section className="profile flex column align-center justify-center">
        <div style={{ position: "static" }}>
            <img className="back" src={arrow} alt="go back arrow" onClick={() => navigate('/home')} />
        </div>
        <ProfilePersonal user={user} />
        <WantGive user={user} />
        <ProfileGallery />
        <Recommendations/>
    </section>
}