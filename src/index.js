import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
import { FaHeadSideCough,FaHeadSideVirus ,FaHeartbeat ,FaSadCry,FaToilet,FaRegSadTear } from 'react-icons/fa';
import { BsEmojiDizzy, BsQuestion,BsExclamationLg} from 'react-icons/bs';
import { BiSleepy} from "react-icons/bi";
import {CiTempHigh} from "react-icons/ci"
import {TbEyeCheck,TbHeartOff,TbDropletHalf2} from "react-icons/tb"
import {GiArmorPunch,GiMoonOrbit,GiFat,GiOrange,GiBlood,GiWaterBolt,GiBadBreath,GiMineralPearls,GiFireBreath,GiBackPain,GiBrokenHeartZone,GiVomiting,GiVibratingBall,GiGhostAlly ,GiDropletSplash,GiTripleScratches,GiButtonFinger,GiEating, GiFire} from "react-icons/gi"
import {MdDry,MdOutlineNoFood } from "react-icons/md"
import {IoTrendingDownOutline} from "react-icons/io5"
import {AiOutlineNodeIndex,AiOutlineThunderbolt} from "react-icons/ai"

const symptoms = [
  {id:0,title:"発熱",link:"/fever",path:<CiTempHigh />  },
  {id:1,title:"全身倦怠感",link:"/fever",path:<FaSadCry />  },
  {id:2,title:"食欲不振",link:"/fever",path:<MdOutlineNoFood/>  },
  {id:3,title:"体重増減",link:"/cough",path:<IoTrendingDownOutline/>},
  {id:4,title:"ショック",link:"/cough",path:<BsExclamationLg/>},
  {id:5,title:"心停止",link:"/cough",path:<TbHeartOff/>},
  {id:6,title:"意識障害/失神",link:"/cough",path:<BiSleepy />},
  {id:7,title:"けいれん",link:"/cough",path:<GiVibratingBall />},
  {id:8,title:"めまい",link:"/palpitations",path:<BsEmojiDizzy/>},
  {id:9,title:"脱水",link:"/palpitations",path:<TbDropletHalf2/>},
  {id:10,title:"浮腫",link:"/edema",path:<GiButtonFinger />},
  {id:11,title:"発疹",link:"/rash",path:<GiMineralPearls/>},
  {id:12,title:"喀痰/咳嗽",link:"/cough",path:<FaHeadSideCough />},
  {id:13,title:"喀血",link:"/sputum",path:<GiFireBreath/>},
  {id:14,title:"呼吸困難",link:"/sputum",path:<GiBadBreath/>},
  {id:15,title:"胸痛",link:"/chestpain",path:<GiBrokenHeartZone/>},
  {id:16,title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  {id:17,title:"胸水",link:"/palpitations",path:<GiWaterBolt/>},
  {id:18,title:"嚥下困難",link:"/palpitations",path:<GiEating/>},
  {id:19,title:"腹痛",link:"/palpitations",path:<GiArmorPunch/>},
  {id:19,title:"悪心嘔吐",link:"/palpitations",path:<GiVomiting/>},
  {id:20,title:"吐血下血",link:"/palpitations",path:<GiBlood/>},
  {id:21,title:"便秘下痢",link:"/palpitations",path:<FaToilet/>},
  {id:22,title:"黄疸",link:"/palpitations",path:<GiOrange/>},
  {id:23,title:"腹部膨隆",link:"/palpitations",path:<GiFat/>},
  {id:24,title:"貧血",link:"/cough",path:<TbEyeCheck/>},
  {id:25,title:"リンパ節腫脹",link:"/cough",path:<AiOutlineNodeIndex />},
  {id:26,title:"月経異常",link:"/cough",path: <GiMoonOrbit/> },
  {id:27,title:"不安/抑うつ",link:"/cough",path: <FaRegSadTear/> },
  {id:28,title:"もの忘れ",link:"/amnesia",path:<BsQuestion />},
  {id:29,title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
  {id:30,title:"運動麻痺",link:"/palpitations",path:<AiOutlineThunderbolt/>},
  {id:31,title:"腰背部痛",link:"/palpitations",path:<GiBackPain/>},
  {id:32,title:"関節痛",link:"/palpitations",path:<MdDry/>},
  {id:33,title:"外傷",link:"/abdominalpain",path:<GiTripleScratches/>},


]

const QuickContext = createContext(symptoms)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <QuickContext.Provider value={symptoms}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QuickContext.Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default QuickContext
