import { ProfilePersonal } from "../components/profile/profile-personal-info"
import arrow from '../assets/pics/arrow.svg'

export const Profile = () => {
    return <section className="profile flex column align-center justify-center">
        <img className="back" src={arrow} alt="go back arrow" />
        <ProfilePersonal />
    </section>
}