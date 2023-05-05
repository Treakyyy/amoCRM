import './Body.css'

const Body = () => {
    return(
        <div className='containerBody'>
            <div></div>
            <div className='leftTaglineBody'>
                <h1 className='h6Body'>Зарабатывайте <br /> больше <br /><span className='welbex'>с WELBEX</span></h1>
                <h4 className='h4Body'>Развиваем и контролируем <br /> продажи за вас</h4>
            </div>
            <div className='rightBody'>
                <h3 className='h3RightText'>Вместе с <span className='welbex'>БЕСПЛАТНОЙ <br /> КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h3>
                <div className='presentBody'>
                        <div className='presentCase1'>
                            <h3>Виджеты <br /><span className='descriptionBody'>30 готовых <br /> решений</span></h3>
                        </div>
                        <div className='presentCase'>
                            <h3>Dashboard <br /><span>с показателями<br />вашего бизнеса</span></h3>
                        </div>
                        <div className='presentCase'>
                            <h3>Skype Аудит <br /><span>отдела продаж<br />CRM системы</span></h3>
                        </div>
                        <div className='presentCase'>
                            <h3>35 дней <br /><span>использования<br />CRM</span></h3>
                        </div>
                </div>
                        <div className='bodyFlexBtn'>
                            <button className='bodyBtn'>Получить консультацию</button>
                        </div>
            </div>
        </div>
    )
}

export default Body