import './Contact.css'

const Contact = () => {
    return(
        <div className='headerContact'>
            <span className='headerTxt'>+7 555 555-55-55</span>
            <div className='contactHeaderBtn'>
                <button className='headerBtn'><img src="telegram.png" alt="" /></button>
                <button className='headerBtn'><img src="phone.png" alt="" /></button>
                <button className='headerBtn'><img src="Whatsapp.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Contact