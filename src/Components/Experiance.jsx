import React, { Component } from "react";
export class Experiance extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content exp-sec ">
          <div className="traning">
            <div className="tra-titile">
              <h3 className="title">WEB DEVELOPMENT <span>TRANING</span></h3>
              <a className="downloads" href="@!" download>Download Certificate</a>
              <span>FROM IT ARTIFICER, PESHAWER IT PARK</span>
            </div>
            <div className="tra-content">
              <p className="tra-text">I have SIX months training in Web Development from IT ARTIFICER Software Company,
                PESHAWER, IT PARK with these skill HTML5, CSS 3, JavaScript (ES6..)for
                Front-End and For Back-End PHP, SQL and Basic understanding of React Photoshop,
                Adobe XD, and Figma Software’s.</p>
            </div>
          </div>
          {/*  */}
          <div className="traning">
            <div className="tra-titile">
              <h3 className="title">FRONT-END DEVELOPER <span>INTERNSHIP</span></h3>
              <a className="downloads" href="@!" download>Download Certificate</a>
              <span>FROM IT GURO, PESHAWER IT PARK</span>
            </div>
            <div className="tra-content">
              <p className="tra-text">I have 7 months internship experience at IT Company GURO  to build more than 10 DashBords web applications, landing pages and websites with HTML5, CSS3, Javascript (ES6 ...) and Bootstrap 4/5 to design many applications Web application responsive user experience. to increase visitor form fillability by creating, maintaining, and applying 100% user interface code and documentation standards.</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experiance;
