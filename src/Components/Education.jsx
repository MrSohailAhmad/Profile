import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <React.Fragment>

                <div className='content edu-sect'>
                    <div className='edu-sec'>
                        <h4 className='edu-title'>MY EDUCATION</h4>
                        <div className='edu'>
                            <h5 className='title'>BS - COMPUTER SCIENCE</h5>
                            <span>2019 - 2023</span>
                            <h6 className='uni-title'>VIRTUAL UNIVERSITY, LAHORE</h6>
                        </div>
                        <div className='edu'>
                            <h5 className='title'>BA - URDU</h5>
                            <span>2017 - 2019</span>
                            <h6 className='uni-title'>ALLAMA IQBAL UNIVERSITY, ISLAMABAD</h6>
                        </div>
                    </div>
                    <div className='skill-sec'>
                        <div className='skills'>
                            <div className='skill'>
                                <h4 className='skill-title'>REACT JS (REACT HOOKS) <span>60% </span></h4>
                                <div className='line'> <div className='react-line'></div> </div>
                            </div>
                            <div className='skill'>
                                <h4 className='skill-title'>BOOTSTRAP 3/4/5 HTML5, CSS3, JAVASCRIPT(ES6, ES7, ES8) <span> 95%</span></h4>
                                <div className='line'><div className='web-line'></div></div>
                            </div>
                            <div className='skill'>
                                <h4 className='skill-title'>GIT, GITHUB, GITBUCKET <span>95%</span></h4>
                                <div className='line'><div className='web-line'></div></div>
                            </div>
                            <div className='skill'>
                                <h4 className='skill-title'> PHOTOSHOP TO (HTML) <span>95%</span></h4>
                                <div className='line'><div className='web-line'></div></div>
                            </div>
                            <div className='skill'>
                                <h4 className='skill-title'>ADOBE XD, FIGMA... (HTML) <span>95%</span></h4>
                                <div className='line'><div className='web-line'></div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Education
