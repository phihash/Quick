import React from 'react'
import logo from '../logo.svg'
import SymptomItem from './SymptomItem';
import { FaHeadSideCough,FaHeadSideVirus ,FaHeartbeat ,FaRegFlushed  } from 'react-icons/fa';
import { BsEmojiAngry ,BsArrowDownRight } from 'react-icons/bs';
import { BiSleepy} from "react-icons/bi";
import {CiTempHigh} from "react-icons/ci"
import {TbEyeCheck} from "react-icons/tb"
import {GiMineralPearls} from "react-icons/gi"


const Home = () => {
  const urls =[
    {title:"発熱",link:"/fever",path:<CiTempHigh />  },
    {title:"意識障害",link:"/cough",path:<BiSleepy />},
    {title:"不機嫌",link:"/cough",path: <BsEmojiAngry/> },
    {title:"咳嗽",link:"/cough",path:<FaHeadSideCough />},
    {title:"喀痰",link:"/sputum",path:<GiMineralPearls/>},
    {title:"体重減少",link:"/cough",path:<BsArrowDownRight/>},
    {title:"皮疹",link:"/rash",path:<FaRegFlushed/>},
    {title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
    {title:"結膜充血",link:"/cough",path:<TbEyeCheck/>},
    {title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  ]
  return (

    <>
    <h2 className='font-bold text-2xl p-3'>症候一覧</h2>
    {/* p-3は下のエリアに合わせている */}
    <div class='flex flex-wrap my-6 '>
        {urls.map((item) => (
          <SymptomItem obj={item}></SymptomItem>
        ))}
    </div>
    </>

  )
}

export default Home
