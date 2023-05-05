import Contact from './Contact'
import './Header.css'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    return(
        <div className='containerHeader'>
            <div></div>
            <HeaderMenu/>
            <Contact/>
        </div>
    )
}

export default Header