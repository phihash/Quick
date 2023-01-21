import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import Footer from './components/Footer';
import CoughPage from './components/CoughPage';
import Home from './components/Home';
import Header from './components/Header';
import EdemaPage from './components/EdemaPage';
import FeverPage from './components/FeverPage';

function App() {

  return (
    <BrowserRouter>
      <div class='mx-auto w-3/4'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cough" element={<CoughPage />} />
        <Route path="/edema" element={<EdemaPage />} />
        <Route path="/fever" element={<FeverPage />} />
      </Routes>

     </div>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
