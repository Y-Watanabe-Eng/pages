import '../style.css'
import yw from "/img/works-c.jpg";
import { motion } from "motion/react";

export const Profile = () => {

    return(
        <motion.div className='profile'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4  }}
        >
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>PROFILE</h2>
            <div className="grid md:grid-cols-2">
                <div className='flex items-center'>
                    <img className='rounded-lg' src={yw} alt="yw" />
                </div>
            <div>
                <p className='text-base'>初めてITというものに触れたのは20歳頃に組んでいたバンドのHPを<br/>
                作るところからだったと思います。</p><br/>
                <p className='text-base'> 業務ではAIX OSを中心としたサーバ群や各種ネットワーク機器に関わり、設計構築、運用保守に携わっています。直接的にはCiscoのL3SW/L2SWBigIPといった製品の設定に触れることが多いです。</p><br/>
                <p>独学ではPython、JavaScript(React.js)等を学習。<br/>
                クラウド上でWEBアプリを動かしてみることを主軸に、業務効率化系のアプリ作成等を試行錯誤しながら試しています。</p><br/>
                <p className='text-base'>音楽と買い物、あとYoutubeが娯楽です。</p>
            </div>
            </div>
        </motion.div>
    )
}