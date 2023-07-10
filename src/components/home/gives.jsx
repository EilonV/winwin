export const Gives = (props) => {
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
    const generateDate = () => {
        const startDate = new Date('2022-01-01');
        const endDate = new Date('2023-12-31');
        const months = ['בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני', 'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר']
        const randomTimestamp = Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();
        const time = new Date(randomTimestamp)
        const formattedTime = `${time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`
        const format = `${time.getDay() + 1} ${months[time.getMonth()]} ב-${formattedTime} `
        return format;

    }

    return <section className="gives">
        <h1 className="active" onClick={props.switchTab}>הצעות</h1>
        <div className="give-list-wrapper active">
            <div className="give-list">

                <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                        <div className="contact flex align-center">
                            <img src={props.heart} alt="swap want/give" />
                            <img className="avatar" src={props.avatar} alt="swap want/give" />
                            <p>{generateDate()}</p>
                        </div>
                    </div>
                </div>

                <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>    <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>    <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>    <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>    <div className="give">
                    <div className="title flex space-between" >
                        <p>title</p>
                        <div className="flex">
                            <img src={props.swap} alt="swap want/give" />
                            <img src={props.arrow} alt="arrow down" onClick={expand} />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque eveniet fugit tempore quaerat consectetur laudantium saepe ratione dolorum placeat ex magnam. Ad, molestias nihil similique magnam reiciendis distinctio esse?</p>
                    </div>
                </div>    <div className="give">
                    <div className="title flex space-between" >
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
            </div>
            
        </div>
    </section>
}