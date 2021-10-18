import React from 'react'
import Card from './Card'
import BorderGreen from './Border'
import portfolio from '../images/portfolio.png';

import './About.css';

class About extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <BorderGreen />
        <div className="about__main">
          <h1 className="about__title"></h1>
          <div className="about__container">
            <div className="about__container__head skill">WORKS</div>
            <div className="cards">
              <Card img={portfolio} title="portfolioサイト" lead="画面をスクロールするとタイピング風に文字が表示されるポートフォリオサイト" link="https://g0-i.github.io/portfolio/"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
