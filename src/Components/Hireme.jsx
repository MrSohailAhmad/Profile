import React, { Component } from 'react'

export class Hireme extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: 'Your Name',
            email: 'Your Email',
            number: 'Phone number',
            comment: 'Your Comment'
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='form-modal'>
                    <div className='modal'>
                        <div className="form-area">
                            <form >
                                <label htmlFor="name">
                                    Name:
                                    <input id='name' type='text' onChange={this.nameChange} value={this.state.name} />
                                </label>
                                <label htmlFor="email">
                                    Email:
                                    <input id='email' type='email' onChange={this.emailChange} value={this.state.email} />
                                </label>
                                <label htmlFor="number">
                                    Email:
                                    <input id='number' type='text' onChange={this.numberChange} value={this.state.number} />
                                </label>
                                <label htmlFor="comment">
                                    Subject:
                                    <textarea id='comment' type='comment' onChange={this.commentChange} value={this.state.comment} />
                                </label>
                                <button type="submit" className="btn submit-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Hireme
