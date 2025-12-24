import '../style.css'
import {Link} from "react-router-dom";

export const Header = () => {

    return(
        <header className='border-b-2 border-green-800 slideh'>
            <nav>
                
                <div>
                    <h1 className='text-4xl sm:text-5xl font-CLEAT hover:text-green-800'><Link to="/">Y.W Works</Link></h1>
                </div>
                <ul className='nav-links'>
                    <li><Link className='text-lg hover:text-green-800' to="/">PORTFOLIO</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/Skill">SKILL</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/Profile">PROFILE</Link></li>
                </ul>

            </nav>
        </header>
    )
}

