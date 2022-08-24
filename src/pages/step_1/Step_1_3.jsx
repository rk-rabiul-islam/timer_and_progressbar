import React, { useState } from 'react'
import $ from 'jquery'
import './css/step_1_3.css'
import Video from '../step_1/video.png'


const Step_1_3 = () => {

    // Agetab worrk
const [ageRange, setAgeRange] = useState(1);

const toggleTab = (index) =>{
    setAgeRange(index);
}
    // tab worrk
const [genderRange, setGenderRange] = useState(1);

const toggleGender = (index) =>{
    setGenderRange(index);
}


  

  return (
    <div>
      <div id="scrollbar1" className="statement">
                        <div className="statement-area">
                            <div className="statement-title">
                                <h4>Enter Your Profile Details</h4>
                                <span>Step 3 of 7</span>
                            </div>
                            <div className="statement-video">
                                <span><img src={Video} alt=""/></span>
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
                                            <h5>Your Personal Information</h5>
                                        </div>

                                        <form action="#">
                                            <div className="profile-input">     
                                                <div className="range-area">
                                                    <div className="range-title">
                                                        <h6>Select Your Age Range</h6>
                                                    </div>
                                                    <div className="range">
                                                        <ul>
                                                            <li onClick={() => setAgeRange(1)} className={ageRange === 1 ? "active" : ""}>
                                                                <span>18</span>
                                                                <span>24</span>
                                                            </li>
                                                            <li onClick={() => setAgeRange(2)} className={ageRange === 2 ? "active" : ""}>
                                                                <span>25</span>
                                                                <span>34</span>
                                                            </li>
                                                            <li onClick={() => setAgeRange(3)} className={ageRange === 3 ? "active" : ""}>
                                                                <span>35</span>
                                                                <span>44</span>
                                                            </li>
                                                            <li onClick={() => setAgeRange(4)} className={ageRange === 4 ? "active" : ""}>
                                                                <span>45</span>
                                                                <span>54</span>
                                                            </li>
                                                            <li onClick={() => setAgeRange(5)} className={ageRange === 5 ? "active" : ""}>
                                                                <span>55+</span>
                                                                <span></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="gender-area">
                                                    <h5>What is Your Gender?</h5>
                                                    <div className="gender-radio">
                                                        <ul>
                                                            <li onClick={() => toggleGender(1)} className={genderRange === 1 ? "active" : ""}>
                                                                <label  htmlFor="male"><i className="fa-solid fa-mars"></i></label>
                                                                <span>Male</span>
                                                                <input id="male" type="radio" name="fav_language"/>
                                                            </li>
                                                            
                                                            <li onClick={() => toggleGender(2)} className={genderRange === 2 ? "active" : ""}>
                                                                <label htmlFor="female"><i className="fa-solid fa-venus"></i></label>
                                                                <span>Female</span>
                                                                <input id="female" type="radio" name="fav_language"/>
                                                            </li>
                                                            <li onClick={() => toggleGender(3)} className={genderRange === 3 ? "active" : ""}>
                                                                <label htmlFor="non_binary"><i className="fa-solid fa-mars-stroke-up"></i></label>
                                                                <span>Non-Binary</span>
                                                                <input id="non_binary" type="radio" name="fav_language"/>
                                                            </li>
                                                            <li onClick={() => toggleGender(4)} className={genderRange === 4 ? "active" : ""}>
                                                                <label htmlFor="con-conforming"><i className="fa-solid fa-mercury"></i></label>
                                                                <span>Non-Conforming</span>
                                                                <input id="conforming" type="radio" name="fav_language"/>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="marital">Marital Status</label>
                                                        <select name="" id="marital">
                                                            <option value="">Select</option>
                                                            <option value="">Single</option>
                                                            <option value="">Dubble</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="pets">Do You Have Any Pets?</label>
                                                        <select name="" id="pets">
                                                            <option value="">Select</option>
                                                            <option value="">Yes</option>
                                                            <option value="">No</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="n-people">Number of People in Household</label>
                                                        <input type="text" id="n-people" placeholder="5"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="n-child">Number of Children</label>
                                                        <input type="text" id="n-child" placeholder="3"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>

                                        <div className="statement-button-area">
                                            <div className="statement-save">
                                                <input type="submit" value=""/>
                                                <span id="bottom_gen_btn" className="">Next</span>
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

export default Step_1_3;
