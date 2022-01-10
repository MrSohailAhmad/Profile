import React, { Component } from "react";
import ProfileImg from "../img/profile-img - Copy.png";
class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content pro-content">
          <div className='picture-contact'>
            <div className='pro-img'>
              <img src={ProfileImg} alt="profile-img" />
            </div>
            <div className='pro-info'>
              <div className="contact">
                <h4> <span>AGE :</span> 23 Year </h4>
                <h4> <span>PHONE :</span> 0344 - 4912684 </h4>
                <h4> <span>EMAIL :</span>ahmadsohail1819@gmail.com </h4>
                <h4> <span>ADDRESS :</span>KOHAT, PAKISTAN</h4>
              </div>
            </div>
          </div>
          <div className='profile-sum'>
            <h3> H'I I'M <span>MUHAMMAD SOHAIL</span></h3>
            <p className="summery">
              I'm Front-End Developer over 7 months of experience. I'm From KOHAT,
              PAKISTAN.I code and creact websites with
              JavaScript (ES6,ES7, ES8), HTML5, Bootstrap (ver 4, 5) and CSS 3,
              to build all aspects of the user experience and user interface for
              client-facing landing pages. Specializes in using JS6, Bootstrap 4/5, HTML5, CSS3, React js.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
