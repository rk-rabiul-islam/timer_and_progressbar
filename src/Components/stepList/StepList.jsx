import React from 'react'
import Videologo from "./videoLogo.png"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./stepList.css"
import AnimatedProgressProvider from '../ProgressBar/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';


const stepList = () => {

  return (
    <div>
       <div className="video-list-aria">
                    <div className="row">
                        <div className="col-3 col-md-3 col-sm-3">
                            <div className="video-list">
                                <ul>  
                                    <li>
                                        <div className="list-area active">
                                            <div className="list-number">
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area ">
                                            <div className="list-number">
                                                <span>2</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>4</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>5</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>6</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>7</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>8</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>9</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>10</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>11</span>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li>
                                        <div className="list-area">
                                            <div className="list-number">
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-9 col-md-9 col-sm-9">
                            <div className="video-are">
                                <div className="video-logo">
                                    <img src={Videologo} alt=""/>
                                    <span><i className="fa-solid fa-xmark"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="scrollbar1" className="card-list">
                    <ul>  
                        <li>
                            <div className="list-area active">
                                <div className="list-number">
                                    <span>1</span>
                                </div>
                            </div>
                            <div className="list-title active">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Complete Your Profile</h5>
                                <div className="list-progress">
                                    
                                    <div id='progress_circul' className=" span_1of_4 my-style style-2">
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
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right active"></i>
                                <h5>Choose Your Slogan</h5>
                                <div className="list-progress">
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Choose Your Logo</h5>
                                <div className="list-progress">
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>4</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Choose Your Mission Statement</h5>
                                <div className="list-progress">
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>5</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Choose your custom domain name</h5>
                                <div className="list-progress">
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>6</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Confirm your custom domain name</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>7</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Create your custom business email</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>8</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Choose your portfolio</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>9</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Choose your website Hero Banner</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Complete Your Profile</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>11</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Complete Your Profile</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-area">
                                <div className="list-number">
                                    <span>12</span>
                                </div>
                            </div>
                            <div className="list-title">
                                <i className="fa-solid fa-caret-right"></i>
                                <h5>Complete Your Profile</h5>
                                <div className="list-progress">
                                    
                                    <div className=" span_1of_4 my-style style-2">
                                        <span className="for-min">5min</span>
                                    </div>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
    </div>
  )
}

export default stepList
