import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import { useContext } from 'react';
import QuickContext from '.';

function App() {
  const symptoms = useContext(QuickContext);

  return (
    <BrowserRouter>
      <div class='mx-auto w-11/12 lg:w-3/4'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {symptoms.map((item) => (
          <Route path={item.link} element={item.element} ></Route>
        ))}
        {/* <Route path="/cough" element={<CoughPage />} />
        <Route path="/edema" element={<EdemaPage />} />
        <Route path="/fever" element={<FeverPage />} /> */}
      </Routes>

     </div>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
