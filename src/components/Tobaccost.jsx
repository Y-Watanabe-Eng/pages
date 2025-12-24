import '../style.css'
import Tobaccostimg from '/img/Tobaccost.png'
import { motion } from "motion/react";


export const Tobaccost = () => {
  return (
    <motion.div className='detail'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className='text-2xl sm:text-4xl'>Tobaccost</h2>
      <div>
        <div className="grid sm:grid-cols-2 py-10 detail-body">

          <div>
            <p className='text-xl'>アプリ内容</p><br />
            <p>・たばこのコスト計算</p><br />

            <p className='text-xl'>実装環境</p><br />
            ・ローカルOS:Windows11<br />
            ・エディタ:VSCode:1.81.1<br />
            ・HTML5/CSS3<br />
            ・tailwindcss:3.3.3<br />
            ・JavaScript<br />
            ・Node.js16.17.1<br />
            ・ライブラリ:React.js:18.2.0<br />
            ・ビルドツール:Vite:4.4.9<br />
            ・ホスティング:Vercel<br />
            <br />

            <br />

            <p className='text-xl'>制作過程</p><br />
            <p>
            JavaScriptの知識を付ける土台として、<br />
            どちらかと言うとライブラリ、またはフレームワークの<br />
            選定から始めました。<br />
            </p>
            <br />
            <p>
            迷いましたが、調べたところ比較的需要の高そうな<br />
            React.jsを選択。<br />
            さらに調べていくと、以前使われていた<br />
            react-create-appコマンドが非推奨となっていたため、<br />
            Viteを使用することにしました。<br />
            </p>
            <br />
            <p>
            アプリの機能自体はコスト計算という簡素なものですが、<br />
            コンポーネント化やプロパティの受け渡し等、<br />
            新しい概念を学ぶことが出来ました。<br />
            </p>
            <br />
          </div>

          <div className='pt-10'>
            <img className='rounded mb-10'src={Tobaccostimg} alt="Tobaccost" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
