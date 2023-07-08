export const PersonalInfo = (props) => {
    const handleUserInput = (e) => {
        e.preventDefault()
        if (e.target[2].value === e.target[3].value) {
            props.setNewUser(newUser => ({
                ...newUser,
                name: e.target[0].value,
                city: e.target[1].value,
                password: e.target[2].value
            }))
            setTimeout(() => {
                props.personalRef.current.style = "display:none";
                props.wishlistRef.current.style = "display:flex";
                document.querySelector('.register-pagination-prog').style.width = " 66%"
            }, 1500);
        }
        else {
            props.addError(e.target[2], 'password-aut')
            props.addError(e.target[3], 'password-aut')
        }
    }

    return <form className='inputs' onSubmit={handleUserInput} ref={props.personalRef} autoComplete="off">
        <img className="back" src={props.arrow} alt="" />
        <p>פרטים אישיים</p>
        <div className="input-wrapper">
            <input type="text" name="name" placeholder='שם פרטי ושם משפחה' required="required" autoComplete="new-password" aria-autocomplete="none" />
        </div>
        <div className="input-wrapper">
            <input type="text" name="city" placeholder='עיר מגורים' required="required" autoComplete="new-password" aria-autocomplete="none" />
        </div>
        <div className="input-wrapper">
            <input type="password" name="password" placeholder='סיסמא' required="required" autoComplete="new-password" aria-autocomplete="none" minLength={4} maxLength={10} onKeyDown={(e) => props.resetError(e.target, 'password-aut')} />
        </div>
        <div className="input-wrapper">
            <input type="password" name="password" placeholder='אימות סיסמא' required="required" autoComplete="new-password" aria-autocomplete="none" minLength={4} maxLength={10} onKeyDown={(e) => props.resetError(e.target, 'password-aut')} />
        </div>
        <button className="l-button">הבא</button>
    </form>
}