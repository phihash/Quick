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
import Edema from './components/Edema';

const symptoms = [
  {element:<Edema/>,title:"発熱",link:"/fever",path:<CiTempHigh />  },
  {element:<Edema/>,title:"全身倦怠感",link:"/general-malaise",path:<FaSadCry />  },
  {element:<Edema/>,title:"食欲不振",link:"/anorexia",path:<MdOutlineNoFood/>  },
  {element:<Edema/>,title:"体重増減",link:"/weight",path:<IoTrendingDownOutline/>},
  {element:<Edema/>,title:"ショック",link:"/shock",path:<BsExclamationLg/>},
  {element:<Edema/>,title:"心停止",link:"/cardiac-arrest",path:<TbHeartOff/>},
  {element:<Edema/>,title:"意識障害/失神",link:"/syncope",path:<BiSleepy />},
  {element:<Edema/>,title:"けいれん",link:"/convulsions",path:<GiVibratingBall />},
  {element:<Edema/>,title:"めまい",link:"/dizzy",path:<BsEmojiDizzy/>},
  {element:<Edema/>,title:"脱水",link:"/dehydration",path:<TbDropletHalf2/>},
  {element:<Edema/>,title:"浮腫",link:"/edema",path:<GiButtonFinger />},
  {element:<Edema/>,title:"発疹",link:"/rash",path:<GiMineralPearls/>},
  {element:<Edema/>,title:"喀痰/咳嗽",link:"/cough",path:<FaHeadSideCough />},
  {element:<Edema/>,title:"喀血",link:"/hemoptysis",path:<GiFireBreath/>},
  {element:<Edema/>,title:"呼吸困難",link:"/dyspnea",path:<GiBadBreath/>},
  {element:<Edema/>,title:"胸痛",link:"/chestpain",path:<GiBrokenHeartZone/>},
  {element:<Edema/>,title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  {element:<Edema/>,title:"胸水",link:"/pleural-fluid",path:<GiWaterBolt/>},
  {element:<Edema/>,title:"嚥下障害",link:"/dysphagia",path:<GiEating/>},
  {element:<Edema/>,title:"腹痛",link:"/abdominal-pain",path:<GiArmorPunch/>},
  {element:<Edema/>,title:"悪心嘔吐",link:"/nausea-vomiting",path:<GiVomiting/>},
  {element:<Edema/>,title:"吐血下血",link:"/palpitations",path:<GiBlood/>},
  {element:<Edema/>,title:"便秘下痢",link:"/constipation-diarrhea",path:<FaToilet/>},
  {element:<Edema/>,title:"黄疸",link:"/jaundice",path:<GiOrange/>},
  {element:<Edema/>,title:"腹部膨隆",link:"/palpitations",path:<GiFat/>},
  {element:<Edema/>,title:"貧血",link:"/anemia",path:<TbEyeCheck/>},
  {element:<Edema/>,title:"リンパ節腫脹",link:"/lymphadenopathy",path:<AiOutlineNodeIndex />},
  {element:<Edema/>,title:"排尿異常",link:"/cough",path:<GiSplurt/>},
  {element:<Edema/>,title:"血尿/蛋白尿",link:"/cough",path:<MdGrain/>},
  {element:<Edema/>,title:"月経異常",link:"/cough",path: <GiMoonOrbit/> },
  {element:<Edema/>,title:"不安/抑うつ",link:"/cough",path: <FaRegSadTear/> },
  {element:<Edema/>,title:"もの忘れ",link:"/amnesia",path:<BsQuestion />},
  {element:<Edema/>,title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
  {element:<Edema/>,title:"運動麻痺",link:"/paralysis",path:<AiOutlineThunderbolt/>},
  {element:<Edema/>,title:"腰背部痛",link:"/back-pain",path:<GiBackPain/>},
  {element:<Edema/>,title:"関節痛",link:"/arthralgia",path:<MdDry/>},
  {element:<Edema/>,title:"外傷",link:"/wound",path:<GiTripleScratches/>},
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
