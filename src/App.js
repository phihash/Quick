import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import SymptomItem from './components/ SymptomItem';
import Footer from './components/Footer';
import logo from './logo.svg'
import Cough from './components/Cough';
import PageTab from './components/PageTab';

function App() {
  const urls =[
    {title:"発熱",link:"/fever",path:logo},
    {title:"意識障害",link:"/cough",path:logo},
    {title:"不機嫌",link:"/cough",path:logo},
    {title:"咳嗽",link:"/cough",path:logo},
    {title:"喀痰",link:"/sputum",path:logo},
    {title:"体重減少",link:"/cough",path:logo},
    {title:"皮疹",link:"/rash",path:logo},
    {title:"頭痛",link:"/headache",path:logo},
    {title:"結膜充血",link:"/cough",path:logo},
    {title:"動悸",link:"/palpitations",path:logo},
  ]

  return (
    <BrowserRouter>
      <div>
      <h1 className="text-4xl text-center my-8 font-bold">
        Quick
      </h1>
      <h2 className='font-bold text-lg text-center'>症候一覧</h2>
      <div class='flex flex-wrap m-6'>
          {urls.map((item) => (
            <SymptomItem obj={item}></SymptomItem>
          ))}
      </div>

      <Routes>
        <Route path="/cough" element={<Cough />} />
      </Routes>

       <PageTab></PageTab>
      <Footer></Footer>
     </div>
    </BrowserRouter>
  );
}

export default App;
