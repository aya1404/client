import './App.css';
import Layout from './components/Layout';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
