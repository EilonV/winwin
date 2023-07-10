import $ from 'jquery'

export const WantGive = (props) => {
    console.log(props.user);
    let index = 20
    let dist = -30
    let giveDist = -30
    const raise = (e) => {
        var elParent = e.target.parentElement.parentElement
        var el = e.target.parentElement
        $(elParent).children().removeClass('active');
        // $('.want').children().removeClass('active');
        // var el = e.target.parentElement
        el.classList.add('active');
        console.log(el);
    }
    return <div className="want-give flex column">
        <div>
            <p>רצוי</p>
            <div className="give">
                {props.user && props.user.giveback.map((wish) => {
                    return <div className="card to-give" style={{ right: `${giveDist += 30}px`, zIndex: `${index--}` }} onClick={raise}>
                        <h1>{wish.title}</h1>
                        <p>{wish.content}</p>
                    </div>
                })}
            </div>
        </div>
        <div>
            <p>מצוי</p>
            <div className="want">
                {props.user && props.user.wishlist.map((wish) => {
                    return <div className="card wish" style={{ right: `${dist += 30}px`, zIndex: `${index--}` }} onClick={raise}>
                        <h1>{wish.title}</h1>
                        <p>{wish.content}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
}