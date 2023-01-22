import React from 'react'
import PageTab from './PageTab'
import { TabPanel } from 'react-tabs'

const Edema = () => {

  return (
    <div className='m-auto'>
      <PageTab>
        <TabPanel>
          <h1 className='text-2xl font-bold'>浮腫は</h1>
          <div className='text-base font-bold mt-6'>
            <p className='white-pre-line'>
            細胞外液分画中の間質液量の増加で<br />
            </p>
            <p className='white-pre-line'>
                浮腫のメカニズム
                • 毛細血管内の静水圧の上昇
                - 心拍出量の減少で静脈圧が上昇し浮腫を生じる
                - 静脈炎・静脈の閉塞で，局所的に浮腫を生じる
                • 血漿膠質浸透圧の低下
                - 血漿アルブミン濃度の低下から浮腫。
                • 毛細血管壁の透過性の亢進
                - 血漿水の間質液への移行が起きる
                • リンパ管閉塞
            </p>
          </div>
        </TabPanel>

        <TabPanel>
         <h1 className='text-2xl font-bold'>問診</h1>
        </TabPanel>

        <TabPanel>
         <h2 className='text-xl font-bold mt-6'>ポイント</h2>
         <div className='text-base font-bold mt-6'>
          <p className='white-pre-line'>
            1.局所性か全身性か <br />
            2.圧痕性か非圧性か
          </p>
          </div>
        </TabPanel>

        <TabPanel>
         <h1 className='text-2xl font-bold'>検査所見</h1>

        </TabPanel>

        <TabPanel>
          <h1 className='text-2xl font-bold'>治療</h1>

        </TabPanel>

        </PageTab>
        <div className='text-sm font-bold mt-12'>
          <h3 className='text-xl font-bold mb-3'>
            参考
          </h3>
          {/* 以下参考 */}
            <a href="https://hospital.tottori.tottori.jp/files/20180815154935.pdf">モーニングルーティン</a>
        </div>
    </div>
  )
}

export default Edema
