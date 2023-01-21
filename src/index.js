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
import {GiSplurt,GiArmorPunch,GiMoonOrbit,GiFat,GiOrange,GiBlood,GiWaterBolt,GiBadBreath,GiMineralPearls,GiFireBreath,GiBackPain,GiBrokenHeartZone,GiVomiting,GiVibratingBall,GiGhostAlly ,GiDropletSplash,GiTripleScratches,GiButtonFinger,GiEating, GiFire} from "react-icons/gi"
import {MdDry,MdOutlineNoFood,MdGrain } from "react-icons/md"
import {IoTrendingDownOutline} from "react-icons/io5"
import {AiOutlineNodeIndex,AiOutlineThunderbolt} from "react-icons/ai"
import { BrowserRouter } from 'react-router-dom';

const symptoms = [
  {title:"発熱",link:"/fever",path:<CiTempHigh />  },
  {title:"全身倦怠感",link:"/general-malaise",path:<FaSadCry />  },
  {title:"食欲不振",link:"/anorexia",path:<MdOutlineNoFood/>  },
  {title:"体重増減",link:"/weight",path:<IoTrendingDownOutline/>},
  {title:"ショック",link:"/shock",path:<BsExclamationLg/>},
  {title:"心停止",link:"/cardiac-arrest",path:<TbHeartOff/>},
  {title:"意識障害/失神",link:"/syncope",path:<BiSleepy />},
  {title:"けいれん",link:"/convulsions",path:<GiVibratingBall />},
  {title:"めまい",link:"/dizzy",path:<BsEmojiDizzy/>},
  {title:"脱水",link:"/dehydration",path:<TbDropletHalf2/>},
  {title:"浮腫",link:"/edema",path:<GiButtonFinger />},
  {title:"発疹",link:"/rash",path:<GiMineralPearls/>},
  {title:"喀痰/咳嗽",link:"/cough",path:<FaHeadSideCough />},
  {title:"喀血",link:"/hemoptysis",path:<GiFireBreath/>},
  {title:"呼吸困難",link:"/dyspnea",path:<GiBadBreath/>},
  {title:"胸痛",link:"/chestpain",path:<GiBrokenHeartZone/>},
  {title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  {title:"胸水",link:"/palpitations",path:<GiWaterBolt/>},
  {title:"嚥下困難",link:"/palpitations",path:<GiEating/>},
  {title:"腹痛",link:"/palpitations",path:<GiArmorPunch/>},
  {title:"悪心嘔吐",link:"/palpitations",path:<GiVomiting/>},
  {title:"吐血下血",link:"/palpitations",path:<GiBlood/>},
  {title:"便秘下痢",link:"/palpitations",path:<FaToilet/>},
  {title:"黄疸",link:"/palpitations",path:<GiOrange/>},
  {title:"腹部膨隆",link:"/palpitations",path:<GiFat/>},
  {title:"貧血",link:"/anemia",path:<TbEyeCheck/>},
  {title:"リンパ節腫脹",link:"/lymphadenopathy",path:<AiOutlineNodeIndex />},
  {title:"排尿異常",link:"/cough",path:<GiSplurt/>},
  {title:"血尿/蛋白尿",link:"/cough",path:<MdGrain/>},
  {title:"月経異常",link:"/cough",path: <GiMoonOrbit/> },
  {title:"不安/抑うつ",link:"/cough",path: <FaRegSadTear/> },
  {title:"もの忘れ",link:"/amnesia",path:<BsQuestion />},
  {title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
  {title:"運動麻痺",link:"/palpitations",path:<AiOutlineThunderbolt/>},
  {title:"腰背部痛",link:"/palpitations",path:<GiBackPain/>},
  {title:"関節痛",link:"/palpitations",path:<MdDry/>},
  {title:"外傷",link:"/abdominalpain",path:<GiTripleScratches/>},


]

const QuickContext = createContext(symptoms)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <QuickContext.Provider value={symptoms}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QuickContext.Provider>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default QuickContext
