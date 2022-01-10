import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
export class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      number: '',
      comment: '',
      addClass: true,
      textClass: false
    }
  }



  formModal = () => {
    this.setState({
      addClass: !this.state.addClass
    })

  }
  closeModal = () => {
    this.setState({
      addClass: this.state.addClass ? false : true
    })
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  emailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }


  numberChange = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  commentChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }


  submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ysnw9va', 'template_t9wgx85', e.target, 'user_8WusVg9REZlpYhDwphPFf')
      .then((result) => {
        console.log(result.text);
        this.setState({
          textClass: !this.state.textClass
        })

      }, (error) => {
        console.log(error.text);
      });
  };



  render() {
    return (
      <React.Fragment>
        <header className="header-fluid">
          <div className="header-nav">
            <div className="menu-link">
              <Link to="/Profile">Profile</Link>
              <Link to="/Education">Education</Link>
              <Link to="/Experiance">Experiance</Link>
              <Link to="/Project">Projects</Link>
            </div>
            {/* button section */}
            <div className="link-sec">
              <div className="link-tab">
                <button href="#!" onClick={this.formModal}>Hire me</button>
              </div>
            </div>
          </div>
        </header>
        <div className={this.state.addClass ? 'form-modal mdal-close ' : ' form-modal modal-active'} >
          <div className='modal'>
            <div className="form-area">
              <form onSubmit={this.submitForm}>
                {React.createElement('h4', { className: `${this.state.textClass ? "form-submit-text" : "form-modal-text"}` }, 'Your Message is Submit successFully')}
                <h3> Connect With Me </h3>
                <div className="form-element">
                  <div className="left-side">
                    <label htmlFor="user_name">
                      Name:  </label>
                    <input name='user_name' type='name' placeholder="Enter Your Name" onChange={this.nameChange} value={this.state.name} />
                    <br></br>
                    <label htmlFor="user_email">
                      Email:  </label>
                    <input name='user_email' type='email' placeholder="Enter Your Email" onChange={this.emailChange} value={this.state.email} />
                    <br></br>
                    <br></br>
                    <label htmlFor="message">
                      Subject:  </label>
                    <textarea name='message' type='message' placeholder="Drop Your Perposal" onChange={this.commentChange} value={this.state.comment} />
                  </div>
                  <div className="sub-sec">
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <button onClick={this.closeModal} className="close-btn">CLOSE</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
