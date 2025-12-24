import '../style.css'
import {Link} from "react-router-dom";


export const Bottom = () => {
  return (
    <div className='bottom slideb'>
        <nav>

            <ul className='bottom-nav grid-cols-3'>
                <li><Link className='text-sm text-white hover:text-green-800' to="/">PORTFOLIO</Link></li>
                <li><Link className='text-sm text-white hover:text-green-800' to="/Skill">SKILL</Link></li>
                <li><Link className='text-sm text-white hover:text-green-800' to="/Profile">PROFILE</Link></li>
            </ul>

        </nav>
    </div>
  )
}
