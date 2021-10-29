import React from 'react'
import Card from './Card'
import BorderYellow from './Border'
import twitter from '../images/icons/twitter.png'
import github from '../images/icons/github.png'
import qiita from '../images/icons/qiita.jpg'
import './Contact.css';

class About extends React.Component {
  render(){
    return(
      <div  className="wrapper">
        <BorderYellow  />
        <div className="about__main">
          <h1 className="about__title">SNS</h1>
          <div className="about__container">
            <ul class="footer-share">
              <li class="contact__list">
                <a href="https://twitter.com/g04160" target="_blank" rel="nofollow">
                  <img src={twitter} className="sns__img"　/>
                </a>
              </li>
              <li class="contact__list">
                <a href="https://github.com/g0-I" target="_blank" rel="nofollow">
                  <img src={github} className="sns__img"　/>
                </a>
              </li>
              <li class="contact__list">
                <a href="https://qiita.com/g0-I" target="_blank" rel="nofollow">
                  <img src={qiita} className="sns__img"　/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__main">
          <h1 className="about__title">e-mail</h1>
          <div className="contact__mail">
            itayama.go5@gmail.com
          </div>
        </div>
      </div>
    )
  }
}


export default About;
