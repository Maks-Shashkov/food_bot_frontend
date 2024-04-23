import { Link } from "react-router-dom";
import '../index.css'
function Header() {
    return (
        <div className="header">
            <div className='header__container'>
                <div>
                    <img src='/img/logo.svg'/>
                </div>
                <div className="text-center">
                    <img src='/img/kimchi.svg'/>
                    <h3>
                        Самая вкусная еда
                    </h3>
                </div>
                <div>
                    <img src='/img/fire-heart.svg'/>
                </div>
            </div>
            <div className='header__name'>
                <h1>
                    МЕНЮ
                </h1>
            </div>
        </div>
    
    )
}

export default Header;