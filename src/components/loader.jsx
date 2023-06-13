import logo from '../assets/pics/logo.svg'
// import balls from '../assets/pics/balls.svg'

export const Loader = () => {
    return <section className="loader">
        <img className='logo' src={logo} alt="winwin logo" />
        {/* <img className='balls' src={balls} alt="pagination indicator" /> */}

        <div className='balls'>
            <div className='ball-connector-wrapper'>
                <div className='ball-connector ball-connector1'></div>
                <div className='ball-connector ball-connector2'></div>
            </div>
            <div className='ball ball1'> </div>
            <div className='ball ball2'> </div>
            <div className='ball ball3'> </div>
        </div>
        <p className='p1'>להרוויח מהכישרון שלך יותר</p>
        <p className='p2'>להגיע אל יותר לקוחות</p>
        <p className='p3'>הארנק נשאר בכיס</p>
    </section>
}