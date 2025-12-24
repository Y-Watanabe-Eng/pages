import '../style.css'
import New from "/img/MiniMemo/MiniMemo-New.png";
import Load from "/img/MiniMemo/MiniMemo-Load.png";
import Login from "/img/MiniMemo/MiniMemo-Login.png";
import Signup from "/img/MiniMemo/MiniMemo-Signup.png";
import { motion } from "motion/react";


export const MiniMemo = () => {
  return (
    <motion.div className='detail'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className='text-2xl sm:text-4xl'>MiniMemo</h2>
      <div>
        <div className="grid sm:grid-cols-2 py-10 detail-body">

          <div>
            <p className='text-xl'>アプリ内容</p><br />
            <p>・シンプルなメモ帳</p><br />

            <p className='text-xl'>実装環境</p><br />
            ・ローカルOS:Windows11<br />
            ・エディタ:VSCode:1.78.2<br />
            ・Python:3.10.6<br />
            ・HTML5/CSS3<br />
            ・フレームワーク:Django:4.2.2<br />
            ・仮想サーバ:AWS EC2<br />
            ・ネットワーク設定:AWS VPC<br />
            ・DNS設定:AWS Route53<br />
            ・サーバOS:Ubuntu:20.04<br />
            ・WEBサーバ:Nginx:1.18.0<br />
            ・APPサーバ:Gunicorn:20.1.0<br />
            ・DB:PostgreSQL:14.8<br />

            <br />
            <p className='text-xl'>実装機能</p><br />

            <p>・CRUD機能</p>
            <p>・ユーザ名/パスワードによる<br />&nbsp;認証機能</p>
            <p>・ログインユーザのメモのみを<br />&nbsp;表示するフィルタ</p>

            <br />

            <p className='text-xl'>制作過程</p><br />
            <p>
              まず、自分自身スマートフォンで<br />
              よくメモ書きを残すので、<br />
              コーディングの勉強のためにも、いっそのこと<br />
              自分が使いやすいように作ってしまおうと思い、<br />
              制作に取りかかりました。<br />
            </p>
            <br />
            <p>
              せっかくならスマートフォン、PCのどちらからも<br />
              参照ができるように、Webアプリとして<br />
              ログインユーザ毎にデータを管理すること決定。<br />
            </p>
            <br />
            <p>
              フレームワークはDjangoを使用し、<br />
              その機能に頼っている部分も多分にありますが、<br />
              まずは開発環境での動作確認までを行い、<br />
              AWS EC2での仮想サーバで公開することに決め、<br />
              AWSとUbuntuOS上での各種設定を行い、<br />
              曲がりなりにも1つのコンテンツとして<br />
              成り立たせることが出来ました。<br />
            </p>
            <br />
            <p>
              開発に取りかかりかかるまでは<br />
              上記の「実装環境」に上げている程の<br />
              色々なツールに触れることになるとは<br />
              思っていませんでしたが、躓いて、調べてを繰り返し、<br />
              完成させることができました。<br />
            </p>

            <br />

          </div>

          <div className='pt-10'>
            <p className='py-4'>新規作成画面</p>
            <img className='rounded mb-10'src={New} alt="MiniMemo-New" />
            <p className='py-4'>リスト画面</p>
            <img className='rounded mb-10'src={Load} alt="MiniMemo-Load" />
            <p className='py-4'>ログイン画面</p>
            <img className='rounded mb-10'src={Login} alt="MiniMemo-Login" />
            <p className='py-4'>サインアップ画面</p>
            <img className='rounded mb-10'src={Signup} alt="MiniMemo-Signup" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
