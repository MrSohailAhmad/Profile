import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

function Card(props) {
    return (
        <React.Fragment>
            <div className='pro-card'>
                <div className='card-img'>
                    <img src={props.project.img} alt='project' />
                </div>
                <div className='pro-content'>
                    <h4 className='card-title'>{props.project.name}</h4>
                    <p className='card-text'>{props.project.cardText}</p>
                    <a target='blank' href={props.project.link}> <FaAngleRight /></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
