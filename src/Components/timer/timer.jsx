import React, {useState, useRef, useEffect} from 'react';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./timer.css";
import Countdown from 'react-countdown';
import AnimatedProgressProvider from '../ProgressBar/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';



const Timer = () => {
    

// const [bgColor, setBgcolor] = useState(30)
    
let start_counter = 300;
let totalHour;
let mainSic;
let counter;


const Counterstart = ()=>{
    counter = setInterval(() => {

        let totalSec = Math.floor(start_counter);
        let totalMin = Math.floor(totalSec / 60);
         totalHour = Math.floor(totalMin / 60);
    
        let mainMin = totalMin - (totalHour * 60 );
        mainSic = totalSec - (totalHour * 60 * 60) - (mainMin * 60);
    
        document.getElementById("cercle_min").innerHTML = `${zero(mainMin)}:${zero(mainSic)}`;
        document.getElementById("min").innerHTML = `${zero(mainMin)}`;
        document.getElementById("sec").innerHTML = `${zero(mainSic)}`;


        // Pouse Button And Start Button Work
        document.getElementById("pouse_item").classList.remove('hide_btn')
        document.getElementById("start_item").classList.add('hide_btn');
        // setBgcolor(`${rantime(300, start_counter)}`)

        if(mainMin < 1){
            document.getElementById("bell_icon").style.color =`red`;
        }


    
        if(totalHour === 0 && mainMin === 0 && mainSic === 0 ){
            clearInterval(counter);
        }
        start_counter--;
    },1000);

}



const stopcounter = () => {
    clearInterval(counter);
        // Pouse Button And Start Button Work
        document.getElementById("pouse_item").classList.add('hide_btn')
        document.getElementById("start_item").classList.remove('hide_btn');
}

const resetcounter = () =>{
    start_counter = 300;
    clearInterval(counter);

    document.getElementById("cercle_min").innerHTML = `05:00`;
    document.getElementById("min").innerHTML = `05`;
    document.getElementById("sec").innerHTML = `00`;
    // Pouse Button And Start Button Work
    document.getElementById("pouse_item").classList.add('hide_btn')
    document.getElementById("start_item").classList.remove('hide_btn');

    
}

/**
 * this funtion creat for Rotet The counter bar.
 * @param {*} rantime 
 * @returns just return a(0) .
 */
 function rantime(time, corrent){
    return (100* time) / corrent;
}

/**
 * this funtion creat for get a(0) valu.
 * @param {*} time 
 * @returns just return a(0) .
 */

 function zero(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return `${time}`
    }
};



  return (
    <>
    
    <div className="timer-section">
         <div className="timer-section-title">
             <h4>Step 1</h4>
             <p>Complete Your Profile</p>
         </div>

         <div className="timer-progress">
             <div className=" span_1of_4 my-style style-6">
                <div className="custom_progress">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={35}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                        animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none" })}
                            />
                        );
                        }}
                    </AnimatedProgressProvider>
                </div>
                 <h3 className="progress-complete">completed</h3>
             </div>
         </div>


         <div className="timer-area">
             <div className="timer-cercle">
                 <div  id='cercle_1' style={{ background: `conic-gradient(rgb(3, 133, 255) 0%, rgb(242, 242, 242) 0%)` }} className="cercle-1">
                     <div id='cercle-2' className="cercle-2">
                         <div className="cercle-border">
                             <div id="border_transform">
                                 <div className="border-sec"></div>
                             </div>
                             <div className="cercle-text">
                                 <div className="" id="time_start">
                                     <span id="cercle_min">05:00</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="timer-set-area">
                 <div className="single-timer">
                     <div className="timer-shadow">
                         <div className="hour">
                             <span id="hour_last">00</span>
                             <span id="hour">00</span>
                             <span id="hour_first">00</span>
                         </div>
                     </div>
                     <p>h</p>
                 </div>

                 <div className="single-timer">
                     <div className="timer-shadow">
                         <div className="min">
                             <span id="min_last">00</span>
                             <span id="min">05</span>
                             <span id="min_first">00</span>
                         </div>
                     </div>
                     <p>min</p>
                 </div>

                 <div className="single-timer">
                     <div className="timer-shadow">
                         <div className="sec">
                             <span id="sec_last">00</span>
                             <span id="sec">00</span>
                             <span id="sec_first">00</span>
                             <span id="sec_1first">00</span>
                         </div>
                     </div>
                     <p>sec</p>
                 </div>

             </div>
             <div className="timer-button">
                 <ul>
                     <li onClick={resetcounter} ><div id="reset" className="reset"><i className="fa-solid fa-rotate-right"></i></div></li>
                     <li onClick={stopcounter} className="hide_btn" id="pouse_item"><div className="pouse"><i  className="fa-solid fa-pause"></i></div></li>
                     <li onClick={Counterstart} id="start_item"><div id="start" className="play"><i className="fa-solid fa-play"></i></div></li>
                     <li><div className="bell"><i id="bell_icon" className="fa-solid fa-bell"></i></div></li>
                 </ul>
             </div>
         </div>
     </div>
 </>
  )
}

export default Timer;