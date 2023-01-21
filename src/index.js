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
import CoughPage from './components/CoughPage';
import EdemaPage from './components/EdemaPage';

const symptoms = [
  {element:<CoughPage/>,title:"発熱",link:"/fever",path:<CiTempHigh />  },
  {element:<CoughPage/>,title:"全身倦怠感",link:"/general-malaise",path:<FaSadCry />  },
  {element:<CoughPage/>,title:"食欲不振",link:"/fever",path:<MdOutlineNoFood/>  },
  {element:<CoughPage/>,title:"体重増減",link:"/cough",path:<IoTrendingDownOutline/>},
  {element:<CoughPage/>,title:"ショック",link:"/cough",path:<BsExclamationLg/>},
  {element:<CoughPage/>,title:"心停止",link:"/cough",path:<TbHeartOff/>},
  {element:<CoughPage/>,title:"意識障害/失神",link:"/cough",path:<BiSleepy />},
  {element:<CoughPage/>,title:"けいれん",link:"/cough",path:<GiVibratingBall />},
  {element:<CoughPage/>,title:"めまい",link:"/palpitations",path:<BsEmojiDizzy/>},
  {element:<CoughPage/>,title:"脱水",link:"/palpitations",path:<TbDropletHalf2/>},
  {element:<EdemaPage/>,title:"浮腫",link:"/edema",path:<GiButtonFinger />},
  {element:<CoughPage/>,title:"発疹",link:"/rash",path:<GiMineralPearls/>},
  {element:<CoughPage/>,title:"喀痰/咳嗽",link:"/cough",path:<FaHeadSideCough />},
  {element:<CoughPage/>,title:"喀血",link:"/hemoptysis",path:<GiFireBreath/>},
  {element:<CoughPage/>,title:"呼吸困難",link:"/sputum",path:<GiBadBreath/>},
  {element:<CoughPage/>,title:"胸痛",link:"/chestpain",path:<GiBrokenHeartZone/>},
  {element:<CoughPage/>,title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  {element:<CoughPage/>,title:"胸水",link:"/palpitations",path:<GiWaterBolt/>},
  {element:<CoughPage/>,title:"嚥下困難",link:"/palpitations",path:<GiEating/>},
  {element:<CoughPage/>,title:"腹痛",link:"/palpitations",path:<GiArmorPunch/>},
  {element:<CoughPage/>,title:"悪心嘔吐",link:"/palpitations",path:<GiVomiting/>},
  {element:<CoughPage/>,title:"吐血下血",link:"/palpitations",path:<GiBlood/>},
  {element:<CoughPage/>,title:"便秘下痢",link:"/palpitations",path:<FaToilet/>},
  {element:<CoughPage/>,title:"黄疸",link:"/palpitations",path:<GiOrange/>},
  {element:<CoughPage/>,title:"腹部膨隆",link:"/palpitations",path:<GiFat/>},
  {element:<CoughPage/>,title:"貧血",link:"/anemia",path:<TbEyeCheck/>},
  {element:<CoughPage/>,title:"リンパ節腫脹",link:"/cough",path:<AiOutlineNodeIndex />},
  {element:<CoughPage/>,title:"月経異常",link:"/cough",path: <GiMoonOrbit/> },
  {element:<CoughPage/>,title:"不安/抑うつ",link:"/cough",path: <FaRegSadTear/> },
  {element:<CoughPage/>,title:"もの忘れ",link:"/amnesia",path:<BsQuestion />},
  {element:<CoughPage/>,title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
  {element:<CoughPage/>,title:"運動麻痺",link:"/palpitations",path:<AiOutlineThunderbolt/>},
  {element:<CoughPage/>,title:"腰背部痛",link:"/palpitations",path:<GiBackPain/>},
  {element:<CoughPage/>,title:"関節痛",link:"/palpitations",path:<MdDry/>},
  {element:<CoughPage/>,title:"外傷",link:"/abdominalpain",path:<GiTripleScratches/>},


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
