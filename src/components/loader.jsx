import logo from '../assets/pics/logo.svg'

export const Loader = () => {
    return <section className="loader">
        <img src={logo} alt="winwin logo" />
        <div className='balls'>
            <div className='ball'>
                <div className='ball-connector'></div>
            </div>
            <div className='ball'>
                <div className='ball-connector'></div>
            </div>
            <div className='ball'>
                <div className='ball-connector'></div>
            </div>
        </div>
        <p>להרוויח מהכישרון שלך יותר</p>
        {/* <p>להגיע אל יותר לקוחות</p> */}
        {/* <p>הארנק נשאר בכיס</p> */}
    </section>
}