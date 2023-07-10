import logo from '../../assets/pics/logo/logo-s.svg'

export const Recommendations = () => {
    return <div className="recommendations flex column align-center">
        <h1>המלצות</h1>
        <div className="recommends">
            <p>שני סופר מקצועית והעבירה את הכלב שלנו שינוי מטורף</p>
            <p>אלופה!!</p>
            <p>שני תותחית היה תענוג</p>
        </div>
        <button>+</button>
        <img src={logo} alt="winwin logo" />
    </div>
}