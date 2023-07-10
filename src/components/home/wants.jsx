export const Wants = (props) => {
    const expand = (e) => {
        const el = e.target.parentElement.parentElement.parentElement
        // el.style.animation = 'heightSpeard 1s 1 forwards ease'
        if (el.style.maxHeight === '200px')
            el.style.maxHeight = '40px'
        else if (!el.style.maxHeight) {
            el.style.maxHeight = '200px'
        }
        else el.style.maxHeight = '200px'
        console.log(el);
    }
    return <section className="wants active">
        <h1 onClick={props.switchTab}>בקשות</h1>
        <div className="want-list-wrapper">
            <div className="want-list">
                <div className="want">
                    <div className="title flex space-between">
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>
                <div className="want">
                    <div className="title flex space-between">
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>
                <div className="want">
                    <div className="title flex space-between">
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>
            </div>
            
        </div>
      
    </section>
}