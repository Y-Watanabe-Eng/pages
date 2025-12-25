import '../style.css'
import { motion } from "motion/react";


export const playbass = () => {
  return (
    <motion.div className='detail'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className='text-2xl sm:text-4xl'>YouTube動画一覧</h2>
      <div>
        <div className="grid sm:grid-cols-2 py-10 detail-body">

          <div>
            <p className='text-xl'>サイト内容</p><br />
            <p>・私がベースを弾いている
            <br/>　Youtube動画一覧</p><br />

            <p className='text-xl'>実装環境</p><br />
            ・ローカルOS:Windows11<br />
            ・エディタ:VSCode:1.85.1<br />
            ・TypeScript:5.3.3<br />
            ・HTML5/CSS3<br />
            ・tailwindcss:3.4.1<br />
            ・MUI:5.15.4<br />
            ・フレームワーク:Next.js:14.0.4<br />
            ・ホスティング:Vercel<br />
            ・API:YouTube Data API v3
            <br />

            <br />

            <p className='text-xl'>制作過程</p><br />
            <p>
            TypeScliptの知識を深めること、<br />
            また、外部APIの利用と、データの処理について<br />
            学ぶため、制作にあたりました。<br />
            </p>
            <br />
            <p>
            以前のフレームワークはPythonのDjangoを選択したため、<br />
            今回はバックエンド側もTypeScriptで記述でき、<br />
            バージョンが14に上がってAppRouterのような新しい機能も<br />
            推奨となっていたため、Next.jsを選択。
            </p>
            <br />
            <p>
            サーバ側では外部APIでYouTube動画を取得し、<br />
            フロントエンド側でページネーションとソートを<br />
            実装しました。<br />
            </p>
            <br />
          </div>

        </div>
      </div>
    </motion.div>
  )
}
