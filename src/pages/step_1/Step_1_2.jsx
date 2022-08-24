import React, { useContext } from 'react'
import './css/step_1_2.css'
import Video from '../step_1/video.png'
import StapContexts from '../../Components/StapControl/Contexts/StapContext';

const Step_1_2 = () => {

const {stepChangerDispatch} = useContext(StapContexts);

const stapComplite = (index) =>{

    stepChangerDispatch({type : "CHANGESTAP", payload: index}); 
}

  return (
    <div>
      <div id="scrollbar1" className="statement">
                        <div className="statement-area">
                            <div className="statement-title">
                                <h4>Enter Your Profile Details</h4>
                                <span>Step 2 of 7</span>
                            </div>
                            <div className="statement-video">
                                <span><img src={Video } alt=""/></span>
                            </div>
                            <div className="statement-form">
                                <div className="profile-area">
                                        
                                    <div className="profile-step">
                                        <ul>
                                            <li><span><i className="fa-solid fa-id-badge"></i></span></li>
                                            <li><span><i className="fa-solid fa-location-dot"></i></span></li>
                                            <li><span><i className="fa-solid fa-user-large"></i></span></li>
                                            <li><span><i className="fa-solid fa-briefcase"></i></span></li>
                                            <li><span><i className="fa-solid fa-graduation-cap"></i></span></li>
                                            <li><span><i className="fa-solid fa-heart"></i></span></li>
                                            <li><span><i className="fa-solid fa-heart"></i></span></li>
                                        </ul>
                                    </div>

                                    <div className="profile-info">
                                        <div className="profile-title">
                                            <h5>Your Billing Address</h5>
                                        </div>

                                        <form action="#">
                                            <div className="profile-input">     
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="unit_no">Suite/Appt Unit Number</label>
                                                        <input type="text" id="unit_no" placeholder="4B"/>                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="house_no">Street/House Number </label>
                                                        <input type="text" id="house_no" placeholder="375"/>
                                                    </div>
                                                </div>
                                                
                                              
                                                <label htmlFor="s_name">Street/Name</label>
                                                <input type="text" id="s_name" placeholder="Carling Avenue"/>
                                                
                                               
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="country">City Name</label>
                                                        <select name="" id="country">
                                                            <option value="">Select</option>
                                                            <option value="">Canada</option>
                                                            <option value="">India</option>
                                                            <option value="">U.State</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="country">Province/State</label>
                                                        <select name="" id="country">
                                                            <option value="">Select</option>
                                                            <option value="">Ontario</option>
                                                            <option value="">India</option>
                                                            <option value="">U.State</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="city">City Name</label>
                                                        <input type="text" id="city" placeholder="Toronto"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="zip_code">Postal/Zip Code</label>
                                                        <input type="text" id="zip_code" placeholder="K1P 2Y9"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>

                                        <div className="statement-button-area">
                                            <div className="statement-save">
                                                <input type="submit" value=""/>
                                                <span onClick={() => stapComplite('STAP3')} id="bottom_gen_btn" className="">Next</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Step_1_2;
