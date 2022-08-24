import Header from './Components/header/header';
import Timer from './Components/timer/timer';
import './App.css'


import StepList from './Components/stepList/StepList';

import Step_1_1 from './pages/step_1/Step_1_1';
import Step_1_2 from './pages/step_1/Step_1_2';
import Step_1_3 from './pages/step_1/Step_1_3';
import { useContext } from 'react';
import StapContexts from './Components/StapControl/Contexts/StapContext';


function App() {

const {stepChanger} = useContext(StapContexts);

console.log(stepChanger);



  return (

      <div className='main-container '>
            <div className='side-app'>
                <Header/>
                <div className='row'>
                    <div className='col-md-6 col-lg-3'>
                        <Timer/>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                       <StepList/>
                    </div>
                    <div className='col-md-12 col-lg-5'>
                        <div className={stepChanger === 'STAP1' ? "stapdisplay" : "stap1display"}><Step_1_1/></div>
                        <div className={stepChanger === 'STAP2' ? "stapdisplay" : "stap1display"}><Step_1_2/></div>
                        <div className={stepChanger === 'STAP3' ? "stapdisplay" : "stap1display"}><Step_1_3/></div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default App;
