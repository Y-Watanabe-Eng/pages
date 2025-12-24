import '../style.css'
import kempichan_antenna from "/img/kempichan_antenna.png"
import Tobaccost from '/img/Tobaccost.png'
import { Link } from 'react-router-dom'

export const AppR = () => {

  return (
    
    <div>
      <div className='appLR'>
        <span>　</span>
      </div>
      <div className='appLR pt-2'>
        <img src={kempichan_antenna} alt="kempichan_antenna" />
      </div>
      <div className='appLR'>
        <span>※配信者ご本人様の許可取得済み※</span>
      </div>
      <div className='appLR'>
        <a
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        href="https://kempichan-antenna.vercel.app/"
        >LINK</a>
        <Link  
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        to="/Kempichan"
        >DETAIL</Link>
      </div>

      <div className='appLR'>
        <img src={Tobaccost} alt="tobaccost" />
      </div>
      <div className='appLR'>
        <a 
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white font-semiboid py-2 border border-green-800 rounded shadow'
        href='https://tobaccost.vercel.app/'
        >LINK</a>
        <Link 
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white font-semiboid py-2 border border-green-800 rounded shadow'
        to='/Tobaccost'
        >DETAIL</Link>
      </div>
    </div>
  )
}