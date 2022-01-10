import React, { Component } from 'react'
import Itguro from '../img/Captnbmggvure.PNG'
import Weatherapp from '../img/watherapp.png'
import Srcare from '../img/sccare360.PNG'
import Quizapp from '../img/quiz.png'
import CurrencyApp from '../img/currency.png'
import Card from './Card'
export class Project extends Component {


    render() {
        const project = [
            {
                id: 0,
                name: 'IT GURO',
                img: Itguro,
                cardText: 'This is IT GURO Software Company Website',
                link: 'http://www.itguro.com/'
            },
            {
                id: 1,
                name: 'Weather App',
                img: Weatherapp,
                cardText: 'I create simple Weather App',
                link: 'https://mrsohailahmad.github.io/weather-app/'
            },
            {
                id: 2,
                name: 'Quiz App',
                img: Quizapp,
                cardText: 'I Create simple Quiz App',
                link: 'https://mrsohailahmad.github.io/quizApp/'
            },
            {
                id: 3,
                name: 'SrCare360',
                img: Srcare,
                cardText: 'This is SrCare Security US Based Company Website',
                link: 'https://mrsohailahmad.github.io/srcare360/'
            },
            {
                id: 4,
                name: 'Currency Calculater',
                img: CurrencyApp,
                cardText: 'This is Simple Currency Calculation App',
                link: 'https://mrsohailahmad.github.io/CurrencyCal/'
            },
        ]
        const proList = project.map(project => <Card key={project.id} project={project} />)
        return (
            <React.Fragment>
                <div className='content card-content'>
                    {proList}
                </div>
            </React.Fragment>
        )
    }
}

export default Project
