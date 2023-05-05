import './Footer.css'

const Footer = () => {
    return(
        <div className='containerFooter'>
            <div></div>
            <div className='footerMenuLeft'>
                <div className='flexFooterMenu'>
                    <h4 className='h4FooterHeader'>О компании</h4>
                    <span className='footerBtn'>Партнёрская программа</span>
                    <span className='footerBtn'>Вакансии</span>
                </div>
                <div className='flexFooterMenu'>
                    <h4 className='h4FooterHeader'>Меню</h4>
                    <span className='footerBtn'>Расчёт стоимости</span>
                    <span className='footerBtn'>Услуги</span>
                    <span className='footerBtn'>Виджеты</span>
                    <span className='footerBtn'>Интеграции</span>
                    <span className='footerBtn'>Наши клиенты</span>
                </div>
                <div className='flexFooterMenu'>
                    <h4 className='h4FooterHeader1'>1</h4>
                    <span className='footerBtn'>Наши клиенты</span>
                    <span className='footerBtn'>Благодарственные письма</span>
                    <span className='footerBtn'>Сертификаты</span>
                    <span className='footerBtn'>Блог на Youtube</span>
                    <span className='footerBtn'>Вопрос / Ответ</span>
                </div>
            </div>
            <div className='rightMenuFooter'>
                <h4 className='h4FooterHeaderRight'>Контакты</h4>
                <span className='textFooter'>+7 555 555-55-55</span>
                <div className='rightMenuBtn'>
                    <img src="telegram.png" alt="" />
                    <img src="phone.png" alt="" />
                    <img src="Whatsapp.png" alt="" />
                </div>
                <span className='textFooter'>Москва, Путевой проезд 3с1, к 902</span>
                <h5 className='end'>©WELBEX 2022. Все права защищены. <br /> <span className='underline'>Политика конфиденциальности</span></h5>
            </div>
        </div>
    )
}

export default Footer