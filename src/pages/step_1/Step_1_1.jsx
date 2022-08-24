import React, { useContext } from 'react'
import './css/step_1_1.css'
import Videopng from './video.png'
import UploadImage from './upload.png'
import StapContexts from '../../Components/StapControl/Contexts/StapContext'

const Step_1_1 = () => {

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
                                <span>Step 1 of 7</span>
                            </div>
                            <div className="statement-video">
                                <span><img src={Videopng} alt=""/></span>
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
                                            <h5>Your Basic Info</h5>
                                        </div>

                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="profile-input">
                                                        
                                                        <label htmlFor="f-name">First Name</label>
                                                        <input type="text" id="f-name" placeholder="Dyna"/>
                                                        
                                                        
                                                        <label htmlFor="l-name">Last Name</label>
                                                        <input type="text" id="l-name" placeholder="Appolon"/>
                                                        
                                                        
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" id="email" placeholder="dyna@9to5escapee.com"/>
                                                        
                                                     
                                                        <label htmlFor="b-email">Business Email</label>
                                                        <input type="email" id="b-email" placeholder="business@9to5escapee.com"/>
                                                        
                                                        <label htmlFor="user-name">Username</label>
                                                        <input type="text" id="user-name" placeholder="dynaappolon"/>

                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="upload-logo-area">
                                                        <div className="upload-box">
                                                            <div className="upload-img-box">
                                                                <div className="drop-zone">
                                                                    <span className="drop-zone__prompt"><img src={UploadImage} alt=""/> Drag & Drop Your Logo Here</span>
                                                                    <input id="logo_uplode" type="file" name="myFile" className="drop-zone__input"/>
                                                                </div>
                                                            </div>
                                                            <label htmlFor="logo_uplode" id="logo_uplode_btn">Upload From Computer</label>
                                                        </div>
                                                    </div>
                                                    <div className="profile-input">
                                                       
                                                        <label htmlFor="contact">Contact/Whatsapp Number</label>
                                                        <input type="text" id="contact" placeholder="554-980-5678"/>
                                                        
                                                       
                                                        <label htmlFor="Password">Password</label>
                                                        <input type="password" id="Password" placeholder="Enter your password"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="statement-button-area">
                                            <div className="statement-save">
                                                <input type="submit" value=""/>
                                                <span onClick={() => stapComplite('STAP2')} id="bottom_gen_btn" className="">Next</span>
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

export default Step_1_1;

