import React, { ReactComponentElement } from 'react'
import bgTwitterLogin from './assets/image/bgTwitterLogin.png'
import twittericon from './assets/svg/twittericon.svg'
import googleicon from './assets/svg/googleicon.svg'
import appleicon from './assets/svg/appleicon.svg'

function App (): ReactComponentElement<any> {
  return (
    <div>
      {/* <div className="bg-[url('assets\image\BGTwitterLogin.png')] bg-center h-screen"></div> */}
      {/* <img className='top-0' src={bgTwitterLogin} /> */}
      <div className='flex justify-end'>
        <div className="bg-[url('assets\image\BGTwitterLogin.png')] bg-center h-[829px]  laptop:w-[calc(100%_-_792px)] w-0">
          <div className='flex justify-center items-center h-full'>
            <img className='w-3/5' src={twittericon} />
          </div>
        </div>
        <div className='laptop:w-[792px] w-screen h-[829px] bg-black top-0 p-10'>
          <img className='w-10 mb-4' src={twittericon} />
          <div className="text-white text-7xl font-bold font-['Segoe UI', 'Meiryo', 'system-ui', '-apple-system', 'BlinkMacSystemFont','sans-serif'] mt-20 mb-20">すべての話題が、ここに。</div>
          <div className='flex flex-col w-[300px]'>
            <div className='text-white text-3xl font-bold mb-10'>Twitterをはじめよう</div>
            <button className='text-black text-[14px] rounded-full bg-white px-12 py-2 mt-5 flex justify-center'>
              <img className='w-5 mr-2' src={googleicon} />
              <div>Googleで登録</div>
            </button>
            <button className='text-black text-[14px] font-bold rounded-full bg-white px-12 py-2 mt-5 flex justify-center'>
              <img className='w-5 mr-2' src={appleicon} />
              <div>Appleのアカウントで登録</div>
            </button>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">または</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button className='text-white text-[14px] font-bold rounded-full bg-sky-500 px-12 py-2'>電話番号またはメールアドレスで登録</button>
            <div className='text-gray-400 text-[11px] mt-3'>アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。</div>

            <div className='mt-10'>
              <div className='text-white'>アカウントをお持ちの場合</div>
              <button className='text-sky-500 text-[14px] font-bold w-[300px] rounded-full bg-black outline outline-gray-400 outline-1 px-12 py-2 mt-5'>ログイン</button>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-black w-full h-[72px] px-5 py-5'>
        <div className='text-gray-400 text-[14px] flex flex-wrap justify-center space-x-4'>
          <div>基本情報</div>
          <div>ヘルプセンター</div>
          <div>利用規約</div>
          <div>プライバシーポリシー</div>
          <div>Cookieのポリシー</div>
          <div>アクセシビリティ</div>
          <div>広告情報</div>
          <div>ブログ</div>
          <div>ステータス</div>
          <div>採用情報</div>
          <div>ブランドリソース</div>
          <div>広告</div>
          <div>マーケティング</div>
          <div>Twitterのビジネス活用</div>
          <div>開発者</div>
          <div>プロフィール一覧</div>
          <div>設定</div>
          <div>© 2022 Twitter, Inc.</div>
        </div>
      </footer>
    </div>

  )
}

export default App
