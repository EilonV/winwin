export const RegisterEmail = (props) => {
    const handleUserInput = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        console.log(email);
        if (validateEmail(email)) {
            props.setNewUser(newUser => ({
                ...newUser,
                email: email
            }))
            setTimeout(() => {
                //hide component and show next
                props.emailRef.current.style = "display:none";
                props.userInfoRef.current.style = "display:flex";
            }, 1500);
        }
        else {
            props.addError(e.target[0], 'email')
        }
    }

    const validateEmail = (email) => {
        //partially 
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    // const cancelSpace = (e) => {
    //     if (e.keyCode === 32) e.preventDefault()
    // }

    return <div className='register-email' ref={props.emailRef}>
        <img className='logo' src={props.logo} alt="winwin logo" />
        <div className='header flex column justify-center align-center'>
            <h1>הצטרפות לווין-ווין</h1>
            <h2>כדי להתחיל, אנחנו רק צריכים כתובת מייל</h2>
            <p>אל דאגה, לא נכניס אותך לרשימת תפוצה*</p>
        </div >
        <form className='input flex column align-center' onSubmit={(e) => handleUserInput(e)} onKeyDown={() => props.cancelSpace}>
            <div className="input-wrapper">
                <input type="text" name="email" placeholder='יש להקליד כאן את כתובת המייל שלך' onKeyDown={(e) => props.resetError(e.target, 'email')} />
            </div>
            <button>הרשמה</button>
        </form>
        <div className='google-reg flex column justify-center align-center'>
            <p>אפשר גם עם גוגל</p>
            <button>הרשמה עם גוגל
                <img src={props.google} alt="google login icon" />
            </button>
        </div>
        <div className='existing-acc flex column justify-center align-center'>
            <p>יש לך כבר חשבון? למה לא אמרת</p>
            {/* <a href="">להתחברות</a> */}
        </div>
    </div>
} 