import React from "react";
import "./header.css"
import { easeQuadInOut } from "d3-ease";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import AnimatedProgressProvider from "../ProgressBar/AnimatedProgressProvider";

const Header = () =>{

    return(
        <>
            <div className="page-titie">
                <h3>3 HOURS BUSINESS LAUNCH CHALLENGE</h3>
                <div className="page-title-cercle">
                    <div className="progress-2">
                        <div className="conainer">
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
                
                <div className="page-title-btn">
                    <a href="#"><i className="fa-solid fa-caret-left"></i></a>
                    <a href="#"><i className="fa-solid fa-caret-right"></i></a>
                </div>
                <div className="page-save-btn">
                    <div className="save-btn-area">
                        <span><i className="fa-solid fa-floppy-disk"></i> Saved</span>
                        <a id="top_save" href="#"><i className="fa-solid fa-floppy-disk"></i>Save</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header; 