import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
import { FaHeadSideCough,FaHeadSideVirus ,FaHeartbeat ,FaSadCry } from 'react-icons/fa';
import { BsEmojiAngry ,BsArrowDownRight ,BsEmojiDizzy, BsQuestion} from 'react-icons/bs';
import { BiSleepy} from "react-icons/bi";
import {CiTempHigh} from "react-icons/ci"
import {TbEyeCheck} from "react-icons/tb"
import {GiMineralPearls,GiBackPain,GiBrokenHeartZone,GiVomiting ,GiDropletSplash,GiTripleScratches,GiButtonFinger,GiEating} from "react-icons/gi"
import {MdDry} from "react-icons/md"

const symptoms = [
  {id:0,title:"発熱",link:"/fever",path:<CiTempHigh />  },
  {id:1,title:"全身倦怠感",link:"/fever",path:<FaSadCry />  },
  {id:2,title:"意識障害",link:"/cough",path:<BiSleepy />},
  {id:3,title:"不機嫌",link:"/cough",path: <BsEmojiAngry/> },
  {id:4,title:"咳嗽",link:"/cough",path:<FaHeadSideCough />},
  {id:5,title:"喀痰",link:"/sputum",path:<GiDropletSplash/>},
  {id:6,title:"体重減少",link:"/cough",path:<BsArrowDownRight/>},
  {id:7,title:"皮疹",link:"/rash",path:<GiMineralPearls/>},
  {id:8,title:"頭痛",link:"/headache",path:<FaHeadSideVirus/>},
  {id:9,title:"結膜充血",link:"/cough",path:<TbEyeCheck/>},
  {id:10,title:"動悸",link:"/palpitations",path:<FaHeartbeat/>},
  {id:11,title:"胸痛",link:"/chestpain",path:<GiBrokenHeartZone/>},
  {id:12,title:"腹痛",link:"/abdominalpain",path:<GiTripleScratches/>},
  {id:13,title:"腰背部痛",link:"/palpitations",path:<GiBackPain/>},
  {id:14,title:"関節痛",link:"/palpitations",path:<MdDry/>},
  {id:15,title:"めまい",link:"/palpitations",path:<BsEmojiDizzy/>},
  {id:16,title:"嘔吐",link:"/palpitations",path:<GiVomiting/>},
  {id:17,title:"嚥下困難",link:"/palpitations",path:<GiEating/>},
  {id:18,title:"もの忘れ",link:"/amnesia",path:<BsQuestion />},
  {id:19,title:"浮腫",link:"/edema",path:<GiButtonFinger />},
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
