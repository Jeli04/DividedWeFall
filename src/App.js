import './App.css';
import Navbar from './components/Navbar.jsx';
import Inputs from './components/Inputs.jsx';
import Analysis from './components/Analysis.jsx';
import { useRef } from 'react';

function App() {

  const ref = useRef(null);

    const handleOnClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div>
      <Navbar />
      <div id="overall-container">
        <div id="cat-div2"></div>
        <Inputs ScrollClick={handleOnClick}/>
        <div id="cat-div"></div>
        <Analysis ref={ref} text="Our Analysis" />
      </div>
      <div id="cat-div"></div>
    </div>
  );
};

export default App;
