import './App.css';

import Nav from './component/mainpage/Nav';
import { Route, Routes } from 'react-router-dom';
import Firstpage from './component/mainpage/Firstpage';
import Footer from "./component/mainpage/Footer"
import Aboutpage from './component/About/Aboutpage';
import Projactpage from './component/Project/Projactpage';
import Contactform from './component/Contact/Contactform';
import Hirepage from './component/Contact/Hirepage';
function App() {

  const pointer = (event) => {
    document.getElementById("style-cor").style.left = event.pageX + "px";
    document.getElementById("style-cor").style.top = event.pageY + "px"


  }
  return (
    <>
      <section onMouseMove={pointer}>
        <div className='custom-cursor' id='style-cor'>.</div>
        <Nav />
        <Routes>

          <Route exact path='/' element={<Firstpage />} />
          <Route exact path='About' element={<Aboutpage/>} />
          <Route exact path='Project' element={<Projactpage/>} />
          <Route exact path='HireMe' element={<Hirepage/>} />
        </Routes>
        <Footer />
      </section>

    </>
  );
}

export default App;
