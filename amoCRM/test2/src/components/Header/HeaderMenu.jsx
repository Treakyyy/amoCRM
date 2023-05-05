import './HeaderMenu.css'

const HeaderMenu = () => {
    return(
        <div className='containerHeaderMenu'>
            <div className='logoContainer'>
                <div className='logoHeader'>
                    <img src="logo1.png" alt="" />
                    <img src="logo2.png" alt="" />
                </div>
                <h6 className='logoText'>крупный интегратор CRM <br /> в Росcии и ещё 8 странах</h6>
            </div>
            <div className='containerHeaderBtn'>
                <button className='headerBtn'>Услуги</button>
                <button className='headerBtn'>Виджеты</button>
                <button className='headerBtn'>Интеграции</button>
                <button className='headerBtn'>Кейсы</button>
                <button className='headerBtn'>Сертификаты</button>
            </div>
        </div>
    )
}

export default HeaderMenu